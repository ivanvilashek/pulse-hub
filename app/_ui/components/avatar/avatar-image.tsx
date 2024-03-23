import Image from 'next/image'
import React from 'react'
import { AvatarImageProps } from './avatar.type'

export const AvatarImage: React.FC<AvatarImageProps> = ({
  name,
  src,
  showFallback,
  ...rest
}) => {
  if (showFallback || !src) return null

  return (
    <Image
      alt={name || 'avatar'}
      className="object-cover"
      fill
      src={src}
      {...rest}
      priority
    />
  )
}
