/* eslint-disable */
//Extend default user interface from next-auth

import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    lastName: string
    firstName: string
  }

  interface User {
    lastName: string
    firstName: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    lastName: string
    firstName: string
  }
}
