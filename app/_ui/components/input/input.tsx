'use client'

import React, { useState } from 'react'
import { InputProps } from './input.type'
import clsx from 'clsx'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Icon } from '../icon'

export const Input: React.FC<InputProps> = ({
  label,
  isDisabled,
  isReadOnly,
  className,
  type,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const inputType = type === 'password' && isVisible ? 'text' : type

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <label className="relative flex flex-col-reverse">
      <input
        aria-disabled={isDisabled}
        aria-invalid={'true'}
        readOnly={isReadOnly}
        disabled={isDisabled}
        className={clsx(
          'peer block w-full rounded-md px-3 py-2.5 text-sm text-gray-10 ring-1 ring-inset ring-stroke-1 transition-colors placeholder:text-gray-5 focus:outline-none focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-2 disabled:text-gray-5',
          type === 'password' ? 'pr-10' : '',
          className
        )}
        type={inputType}
        {...rest}
      />
      {type === 'password' && (
        <Icon
          icon={isVisible ? IoEyeOutline : IoEyeOffOutline}
          onClick={toggleVisibility}
          size={'1rem'}
          className="absolute right-3 top-8 cursor-pointer fill-gray-5 stroke-gray-5"
        />
      )}
      <span className="text-sm text-gray-5 transition-colors peer-focus:text-primary">
        {label}
      </span>
    </label>
  )
}
