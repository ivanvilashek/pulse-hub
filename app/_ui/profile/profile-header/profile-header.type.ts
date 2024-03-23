import { UserProfile } from '@app/lib/definitions'

export type ProfileHeaderProps = Omit<UserProfile, 'id' | 'email'>
