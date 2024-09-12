import { Providers } from '@/app/providers'

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      Auth page
      {children}
    </section>
  )
}
