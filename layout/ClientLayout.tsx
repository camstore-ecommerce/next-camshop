'use client'

import Footer2 from '@/layout/Footer2'
import Header from '@/layout/Header'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative flex flex-col h-screen'>
      <Header />
      <main className='flex-1 py-2 border border-red-600 min-h-screen'>{children}</main>
      <Footer2 />
    </div>
  )
}
