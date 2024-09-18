'use client'

import { Link } from '@nextui-org/link'
import { FaCameraRetro } from 'react-icons/fa'
import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
import { TbLayoutDashboardFilled } from 'react-icons/tb'
import { FaUserGroup } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

export default function SideBar () {
  const pathname = usePathname()

  return (
    <div className='min-h-screen p-4 min-w-60 border-r-small border-default-300 flex flex-col gap-4'>
      <Link
        href='/'
        color='foreground'
        className='flex flex-col gap-2 text-center'
      >
        <FaCameraRetro size={35} className='flex-shrink-0 self-center' />
        <h4>CAMPSHOP</h4>
      </Link>
      <div className='flex gap-2 items-center'>
        <p className='text-xs uppercase font-bold'>main</p>
        <Divider className='flex-auto' orientation='horizontal' />
      </div>

      <div className='flex flex-col gap-3'>
        <Button
          className='justify-start'
          startContent={
            <TbLayoutDashboardFilled className='flex-shrink-0' size={25} />
          }
          as={Link}
          href='/admin/dashboard'
          color='default'
          variant='flat'
          size='lg'
        >
          Dashboard
        </Button>
        <Button
          as={Link}
          href='/admin/users'
          className='justify-start'
          startContent={<FaUserGroup className='flex-shrink-0' size={25} />}
          color='default'
          variant='flat'
          size='lg'
        >
          Users
        </Button>
      </div>

      <div className='flex gap-2 items-center'>
        <p className='text-xs uppercase font-bold'>products</p>
        <Divider className='flex-auto' orientation='horizontal' />
      </div>

      {/* -------------- PRODUCT ------------- */}
      <div className='flex flex-col gap-3'>
        <Button
          as={Link}
          href='/admin/users'
          className='justify-start'
          startContent={<FaUserGroup className='flex-shrink-0' size={25} />}
          color='default'
          variant='flat'
          size='lg'
        >
          Cameras
        </Button>
        <Button
          as={Link}
          href='/admin/users'
          className='justify-start'
          startContent={<FaUserGroup className='flex-shrink-0' size={25} />}
          color='default'
          variant='flat'
          size='lg'
        >
          Lens
        </Button>
        <Button
          as={Link}
          href='/admin/users'
          className='justify-start'
          startContent={<FaUserGroup className='flex-shrink-0' size={25} />}
          color='default'
          variant='flat'
          size='lg'
        >
          Film
        </Button>
      </div>

      <div className='flex gap-2 items-center'>
        <p className='text-xs uppercase font-bold'>commerce</p>
        <Divider className='flex-auto' orientation='horizontal' />
      </div>

      <div className='flex flex-col gap-3'>
        <Button
          as={Link}
          href='/admin/users'
          className='justify-start'
          startContent={<FaUserGroup className='flex-shrink-0' size={25} />}
          color='default'
          variant='flat'
          size='lg'
        >
          Orders
        </Button>
        <Button
          as={Link}
          href='/admin/users'
          className='justify-start'
          startContent={<FaUserGroup className='flex-shrink-0' size={25} />}
          color='default'
          variant='flat'
          size='lg'
        >
          Transactions
        </Button>
      </div>
    </div>
  )
}
