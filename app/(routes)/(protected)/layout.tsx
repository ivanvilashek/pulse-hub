import Header from '@app/ui/header'
import { PropsWithChildren } from 'react'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex h-screen px-4 py-20 md:px-16 md:py-24">
        {children}
      </main>
    </>
  )
}

export default Layout
