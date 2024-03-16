import { PropsWithChildren } from 'react'
import { BiPulse } from 'react-icons/bi'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex h-screen items-start justify-center p-4 pt-16">
      <div className="flex w-full max-w-md flex-col gap-y-8">
        <div className="flex items-center justify-center space-x-2">
          <BiPulse className="h-14 w-14 fill-primary" />
          <p className="text-3xl font-bold">
            <span className="text-primary">Pulse</span>
            <span className="text-gray-9">Hub</span>
          </p>
        </div>
        {children}
      </div>
    </main>
  )
}

export default RootLayout
