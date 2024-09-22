'use client'

import AdminDropdown from '@/components/admin/admin-dropdown'
import { SearchIcon } from '@/components/icons'
import { ThemeSwitch } from '@/components/theme-switch'
import SearchBar from '@/components/ui/SearchBar'
import { Input } from '@nextui-org/input'

export default function SideBarHeader () {
  return (
    <div className='flex gap-3 min-h-fit p-3 items-center border-b-small border-default-300'>
      <SearchBar size='lg' placeholder='Search...' />

      <ThemeSwitch />

      <AdminDropdown />
    </div>
  )
}
