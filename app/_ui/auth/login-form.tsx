'use client'

import React from 'react'
import { Input } from '@app/ui/components/input'
import { useFormState } from 'react-dom'
import { authenticate } from '@app/lib/actions/auth'
import { RiErrorWarningLine } from 'react-icons/ri'
import { SubmitButton } from './submit-button'

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={dispatch}>
      <div className="flex flex-1 flex-col gap-y-4 rounded-2xl bg-white p-10">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <div className="flex flex-col space-y-2">
          <SubmitButton />
          {errorMessage && (
            <div
              className="flex h-8 items-center  space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <RiErrorWarningLine className="h-4 w-4 text-red-7" />
              <p className="text-sm text-red-7">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  )
}
