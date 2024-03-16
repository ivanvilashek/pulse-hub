import { Routes, privateRoutes } from '@app/lib/constants'
import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: Routes.SIGN_IN,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const { pathname } = nextUrl
      const isLoggedIn = !!auth?.user
      if (privateRoutes.some((item) => pathname.startsWith(item))) {
        return isLoggedIn
      }

      if (pathname === Routes.HOME) {
        const path = isLoggedIn ? Routes.FEED : Routes.SIGN_IN
        return Response.redirect(new URL(path, nextUrl))
      }

      if (isLoggedIn) {
        return Response.redirect(new URL(Routes.FEED, nextUrl))
      }

      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
