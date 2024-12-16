'use client'

import Footer2 from '@/layout/Footer2'
import Header from '@/layout/Header'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer2 />
    </div>
  )
}
