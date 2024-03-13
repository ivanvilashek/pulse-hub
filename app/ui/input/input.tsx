import React from 'react'
import { InputProps } from './input.type'
import clsx from 'clsx'

export const Input: React.FC<InputProps> = ({ label, className, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={rest.id}
        className="block text-sm font-normal leading-6 text-gray-900"
      >
        {label}
      </label>
      <input
        className={clsx(
          'block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 transition-colors shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
          className
        )}
        {...rest}
      />
    </div>
  )
}
