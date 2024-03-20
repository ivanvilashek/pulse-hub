import Image from 'next/image'
import React from 'react'
import { AvatarImageProps } from './avatar.type'

export const AvatarImage: React.FC<AvatarImageProps> = ({
  size,
  name,
  src,
  showFallback,
  ...rest
}) => {
  if (showFallback || !src) return null

  return (
    <Image
      alt={name || 'avatar'}
      width={size}
      height={size}
      src={src}
      {...rest}
      priority
    />
  )
}
