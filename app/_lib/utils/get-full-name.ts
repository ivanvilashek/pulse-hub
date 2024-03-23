import { User } from 'next-auth'

export const getFullname = (
  data: Partial<Pick<User, 'firstName' | 'lastName'>>
) => {
  if (!data) return
  const { firstName, lastName } = data
  return [firstName, lastName].join(' ')
}
