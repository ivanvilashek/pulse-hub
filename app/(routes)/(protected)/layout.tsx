import Header from '@app/ui/header'
import { PropsWithChildren } from 'react'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex h-screen items-start justify-center p-4 pt-16">
        {children}
      </main>
    </>
  )
}

export default RootLayout
