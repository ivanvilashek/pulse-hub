import { LoginForm } from '@app/ui/auth/login-form'
import { Metadata } from 'next'
import React from 'react'
import { BiPulse } from 'react-icons/bi'

export const metadata: Metadata = {
  title: 'Login',
}

const Page = () => {
  return (
    <main className="flex h-screen items-center justify-center p-4">
      <div className="flex w-full max-w-md flex-col gap-y-8">
        <div className="flex flex-1 flex-col items-center gap-y-8">
          <div className="flex flex-row items-center gap-x-2">
            <BiPulse className="h-14 w-14 fill-primary" />
            <p className="text-3xl font-bold">
              <span className="text-primary">Pulse</span>
              <span className="text-gray-9">Hub</span>
            </p>
          </div>
          <p className="text-2xl font-bold text-gray-9">
            Sign in to your account
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}

export default Page
