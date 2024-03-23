import { Profile, User } from '@prisma/client'

export type UserProfile = Partial<
  Omit<User, 'password'> &
    Omit<Profile, 'createdAt' | 'updatedAt' | 'userId'> & {
      isFollowed: boolean | null
      isOwner: boolean | null
      followersCount: number
      followingCount: number
    }
>
