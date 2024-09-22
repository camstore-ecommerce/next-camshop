'use client'

import { HomeIcon } from '@/components/icons'
import SearchBar from '@/components/ui/SearchBar'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs'
import { Button } from '@nextui-org/button'
import { FaUserGroup, FaFileExport } from 'react-icons/fa6'
import { FaUserPlus } from 'react-icons/fa'
import UserCreateModal from '@/components/admin/users/user.create.modal'
import { useDisclosure } from '@nextui-org/modal'
import UsersTable from '@/components/admin/users/user.table'

export default function Users () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className='flex flex-col gap-2'>
      <Breadcrumbs size='lg'>
        <BreadcrumbItem
          href='/admin/dashboard'
          key='dashboard'
          startContent={<HomeIcon />}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent={true} startContent={<FaUserGroup />}>
          Users
        </BreadcrumbItem>
      </Breadcrumbs>

      <h3 className='font-bold text-lg'>All users</h3>

      <div className='flex gap-2 items-center'>
        <SearchBar size='lg' placeholder='Search users...' />

        <Button
          onPress={onOpen}
          startContent={<FaUserPlus className='flex-shrink-0' size={20} />}
          size='lg'
          color='primary'
        >
          Add user
        </Button>

        <UserCreateModal isOpen={isOpen} onOpenChange={onOpenChange} />
        <Button
          onPress={() => alert('test')}
          startContent={<FaFileExport className='flex-shrink-0' size={20} />}
          size='lg'
          color='default'
          variant='ghost'
        >
          Export CSV
        </Button>
      </div>

      <UsersTable />
    </div>
  )
}
