'use server'

import { auth } from '@/auth'
import prisma from '../prisma'
import { revalidatePath } from 'next/cache'

export const followUser = async (username?: string) => {
  if (!username) return

  try {
    const session = await auth()
    if (!session) return

    const followerUserName = session.user?.username

    await prisma.$executeRawUnsafe(
      `DO
      $do$
      DECLARE
        follower_id_var VARCHAR(255);
        following_id_var VARCHAR(255);
      BEGIN
        WITH ids AS (
          SELECT 
            (SELECT id FROM "User" WHERE username = '${followerUserName}') AS follower_id,
            (SELECT id FROM "User" WHERE username = '${username}') AS following_id
        )
        
        SELECT follower_id, following_id INTO follower_id_var, following_id_var FROM ids;
      
        IF EXISTS (
          SELECT 1
          FROM "Follows"
            WHERE 
              "followingId" = following_id_var
            AND
              "followedById" = follower_id_var
        )
        
        THEN
          DELETE FROM "Follows"
          WHERE "followingId" = following_id_var
          AND "followedById" = follower_id_var;
      
        ELSE
          INSERT INTO "Follows" ("followingId", "followedById")
          VALUES (following_id_var, follower_id_var);
        END IF;
      END
      $do$;
      `
    )

    revalidatePath('/profile')
  } catch (error) {
    console.error(error)
  }
}
