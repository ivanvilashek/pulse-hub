import { Routes } from '@app/lib/constants'
import { SignUpForm } from '@app/ui/auth/sign-up-form'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Register',
}

const Page = () => {
  return (
    <>
      <p className="text-center text-2xl font-bold text-gray-9">
        Create new account
      </p>
      <div className="flex flex-col space-y-4">
        <SignUpForm />
        <p className="text-center text-sm font-semibold text-gray-9">
          <span>Already have an account?</span>
          <Link
            href={Routes.SIGN_IN}
            className="ml-1 cursor-pointer text-primary"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  )
}

export default Page
