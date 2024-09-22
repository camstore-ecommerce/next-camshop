import SideBar from '@/components/admin/sidebar'
import SideBarHeader from '@/components/admin/sidebar-header'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex h-screen flex-row'>
      <div className=''>
        <SideBar />
      </div>

      <div className='flex-grow flex flex-col'>
        <div className='top-0 relative' >
        <SideBarHeader />
        </div>
        <div className='p-6 relative overflow-y-auto'>{children}</div>
      </div>
    </div>
  )
}
