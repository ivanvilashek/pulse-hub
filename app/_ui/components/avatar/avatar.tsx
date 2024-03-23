'use client'

import React, { useState } from 'react'
import { AvatarProps } from './avatar.type'
import { AvatarImage } from './avatar-image'
import { AvatarFallback } from './avatar-fallback'
import { useImage } from '@app/lib/hooks/use-image.hook'
import clsx from 'clsx'

export const Avatar: React.FC<AvatarProps> = ({ src, className, ...rest }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useImage({
    src,
    onError: () => setIsLoading(true),
    onLoad: () => setIsLoading(false),
  })

  const showFallback = isLoading || !src

  return (
    <div
      className={clsx(
        'relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-[#ff80b5] to-primary ring-2 ring-white',
        className
      )}
    >
      <AvatarImage src={src} {...rest} showFallback={showFallback} />
      <AvatarFallback {...rest} showFallback={showFallback} />
    </div>
  )
}
