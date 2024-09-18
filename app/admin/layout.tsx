import SideBar from '@/components/sidebar'
import SideBarHeader from '@/components/sidebar-header'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <SideBar />

      <div className='flex-grow flex flex-col md:overflow-y-auto'>
        <SideBarHeader />
        {children}
      </div>
    </div>
  )
}
