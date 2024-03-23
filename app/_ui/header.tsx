'use server'

import React from 'react'
import { BiPulse } from 'react-icons/bi'
import { Avatar } from '@app/ui/components'
import { auth } from '@/auth'
import { NavLinks } from './nav-links'
import { getFullname } from '@app/lib/utils'
import { Routes } from '@app/lib/constants'

const Header = async () => {
  const session = await auth()

  const { firstName, lastName, image, username } = session?.user || {}

  const links = [
    {
      label: 'Feed',
      href: Routes.FEED,
    },
    {
      label: 'Profile',
      href: Routes.PROFILE + username,
    },
  ]

  return (
    <header className="fixed top-0 z-10 flex w-full items-center gap-x-6 border-b border-b-gray-2 bg-white px-6">
      <div className="flex items-center justify-center space-x-2">
        <BiPulse className="h-10 w-10 fill-primary" />
        <p className="text-xl font-bold">
          <span className="text-primary">Pulse</span>
          <span className="text-gray-9">Hub</span>
        </p>
      </div>
      <NavLinks links={links} />
      <Avatar
        className="ml-auto h-8 w-8"
        name={getFullname({ firstName, lastName })}
        src={image}
      />
    </header>
  )
}

export default Header
