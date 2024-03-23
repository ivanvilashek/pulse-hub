'use client'

import React, { useMemo, useRef } from 'react'
import { AvatarFallbackProps } from './avatar.type'
import { FaCircleUser } from 'react-icons/fa6'
import { getInitials } from '@app/lib/utils'
import { useDimensions } from '@app/lib/hooks/use-dimensions'

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  name,
  showFallback,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useDimensions(ref)

  const fontSize = useMemo(() => Math.floor(width / 2.5), [width])

  if (!showFallback) return null

  if (name) {
    return (
      <div
        ref={ref}
        className={`flex h-full w-full items-center justify-center`}
      >
        <span
          className="select-none text-base font-bold text-white"
          style={{
            fontSize,
          }}
        >
          {getInitials(name)}
        </span>
      </div>
    )
  }

  return <FaCircleUser className="h-full w-full bg-white fill-gray-5" />
}
