export const Routes = {
  HOME: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/login',
  FEED: '/feed',
  PROFILE: '/profile',
}

export const privateRoutes = [Routes.PROFILE, Routes.FEED]

export const publicRoutes = [Routes.HOME, Routes.SIGN_IN, Routes.SIGN_UP]
