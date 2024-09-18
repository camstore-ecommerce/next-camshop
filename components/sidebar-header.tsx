'use client'

import AdminDropdown from '@/components/admin-dropdown'
import { SearchIcon } from '@/components/icons'
import { ThemeSwitch } from '@/components/theme-switch'
import { Input } from '@nextui-org/input'

export default function SideBarHeader () {
  return (
    <div className='flex gap-3 min-h-fit p-3 items-center border-b-small border-default-300'>
      <Input size='lg' placeholder='Search...' startContent={<SearchIcon className='text-default-400' />} />

      <ThemeSwitch />

      <AdminDropdown />
    </div>
  )
}
