/* eslint-disable */
//Extend default user interface from next-auth

import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    userId?: string
  }

  interface User {
    lastName: string
    firstName: string
    username: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    sub: string
    lastName: string
    firstName: string
    username: string
  }
}
