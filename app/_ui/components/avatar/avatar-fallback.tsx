import React from 'react'
import { AvatarFallbackProps } from './avatar.type'
import { FaCircleUser } from 'react-icons/fa6'
import { getInitials, getRandomColor } from '@app/lib/utils'

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  size,
  name,
  showFallback,
}) => {
  if (!showFallback) return null

  if (name) {
    return (
      <div
        className={`flex items-center justify-center`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: getRandomColor(),
        }}
      >
        <span
          className="select-none font-bold text-white"
          style={{ fontSize: Math.floor(size / 2.5) }}
        >
          {getInitials(name)}
        </span>
      </div>
    )
  }

  return (
    <FaCircleUser
      className="bg-white fill-gray-5"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  )
}
