import { User } from '@prisma/client'
import prisma from '../prisma'
import ShortUniqueId from 'short-unique-id'
import { auth } from '@/auth'
import { UserProfile } from '../definitions'

export const getUserByEmail = async (
  email: string
): Promise<User | undefined> => {
  try {
    const data = await prisma.$queryRawUnsafe<User[]>(
      'SELECT * FROM "User" WHERE email = $1',
      email
    )
    return data[0]
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export const getUserByUserName = async (
  username: string
): Promise<User | undefined> => {
  try {
    const data = await prisma.$queryRawUnsafe<User[]>(
      `SELECT 
        "id",
        "firstName", 
        "lastName", 
        "username", 
        "image",
        "email"
      FROM "User" 
      WHERE username = $1`,
      username
    )

    return data[0]
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export const getProfile = async (username: string) => {
  try {
    const session = await auth()

    if (!session) return

    const activeUserName = session.user?.username

    const data = await prisma.$queryRawUnsafe<UserProfile[]>(
      `
        SELECT 
          u.image,
          u.username,
          u."lastName",
          u."firstName",
          u."createdAt",
          u."updatedAt",
          p.bio,
          p.website,
          p."isVerified",
          p."profileImage",
          CASE 
            WHEN u.username <> '${activeUserName}' THEN f."followingId" IS NOT NULL 
          END AS "isFollowed",
          CASE 
            WHEN u.username = '${activeUserName}' THEN true
          ELSE false
          END AS "isOwner",
          (SELECT COUNT(*) FROM "Follows" WHERE "followedById" = u.id) AS "followersCount",
          (SELECT COUNT(*) FROM "Follows" WHERE "followingId" = u.id) AS "followingCount"
        FROM "User" u 

        JOIN "Profile" p 
          ON p."userId" = u.id

        LEFT JOIN "Follows" f 
          ON u.username <> '${activeUserName}' 
          AND f."followingId" = u.id
          AND f."followedById" = (SELECT id FROM "User" WHERE username = '${activeUserName}')

        WHERE u.username = '${username}';
      `
    )

    return data[0]
  } catch (error) {
    console.error(error)
  }
}

export const getUserName = async () => {
  const uid = new ShortUniqueId({ length: 6 }).rnd()
  const username = `user-${uid}`

  const user = await getUserByUserName(username)

  if (user) {
    getUserName()
  }

  return username
}
