'use client'

import React from 'react'
import { Input } from '@app/ui/components/input'
import { useFormState } from 'react-dom'
import { AuthState, register } from '@app/lib/actions/auth'
import { RiErrorWarningLine } from 'react-icons/ri'
import { SubmitButton } from './submit-button'

export const SignUpForm = () => {
  const initialState: AuthState = { message: null, errors: {} }

  const [state, dispatch] = useFormState(register, initialState)
  console.log('Sign up form', state)
  return (
    <form action={dispatch}>
      <div className="flex flex-1 flex-col gap-y-4 rounded-2xl bg-white p-10">
        <div>
          <Input
            label="Name"
            id="name"
            name="name"
            type="name"
            placeholder="Enter your name"
            required
            aria-describedby="name-error"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-7" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div>
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            aria-describedby="email-error"
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-7" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        <div>
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            aria-describedby="password-error"
          />
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-7" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <SubmitButton />
          {state.message && (
            <div
              className="flex h-8 items-center  space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <RiErrorWarningLine className="h-4 w-4 text-red-7" />
              <p className="text-sm text-red-7">{state.message}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  )
}
