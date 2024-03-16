import React from 'react'
import { Input } from '@app/ui/components/input'
import { Button } from '@app/ui/components/button'

export const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-1 flex-col gap-y-6 rounded-2xl bg-white p-10">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <Button>Submit</Button>
      </div>
    </form>
  )
}
