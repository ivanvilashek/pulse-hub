'use client'

import { Routes } from '@app/lib/constants'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavLinks = () => {
  const pathname = usePathname()

  const links = [
    {
      label: 'Feed',
      href: Routes.FEED,
    },
    {
      label: 'Profile',
      href: Routes.PROFILE,
    },
  ]

  return (
    <nav className="flex items-center space-x-3 ">
      {links.map((item, idx) => (
        <Link
          key={`nav-link-${idx}`}
          href={item.href}
          className={clsx(
            'border-b-2 border-transparent px-4 py-5 text-center text-sm font-medium text-gray-5 transition-colors hover:border-b-gray-3 hover:text-gray-7',
            {
              'text-primary': pathname === item.href,
              'border-b-primary': pathname === item.href,
              'hover:text-primary': pathname === item.href,
              'hover:border-b-primary': pathname === item.href,
            }
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}