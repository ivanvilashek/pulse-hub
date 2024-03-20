import { User } from '@prisma/client'

export const getFullname = (user: User) => {
  if (!user) return
  const { firstName, lastName } = user
  return [firstName, lastName].join(' ')
}
