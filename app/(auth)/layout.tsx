import { Providers } from '@/features/general/components/Providers'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
