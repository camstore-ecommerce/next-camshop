'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

export default function ClientLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isDashboard = pathname.includes('/admin')

  return (
    <div className='relative flex flex-col h-screen'>
      {!(isDashboard) && <Navbar />}

      <main
        className={clsx('', {
          'w-full md:w-auto': isDashboard,
          'container max-w-7xl pt-8 px-6 mx-auto flex-grow': !isDashboard
        })}
      >
        {children}
      </main>

      {!(isDashboard) && <Footer />}
    </div>
  )
}
