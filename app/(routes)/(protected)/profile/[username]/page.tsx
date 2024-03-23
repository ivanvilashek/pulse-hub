'use server'

import { getProfile } from '@app/lib/data'
import { ProfileHeader } from '@app/ui/profile/profile-header'
import React from 'react'

const Page = async ({ params }: { params: { username: string } }) => {
  const username = params.username

  const user = await getProfile(username)

  return (
    <div className="w-full">
      <ProfileHeader {...user} />
    </div>
  )
}

export default Page
