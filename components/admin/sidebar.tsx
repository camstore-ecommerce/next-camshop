'use client'

import { Link } from '@nextui-org/link'
import { FaCameraRetro } from 'react-icons/fa'
import { Divider } from '@nextui-org/divider'
import { Button, ButtonProps } from '@nextui-org/button'
import { TbLayoutDashboardFilled } from 'react-icons/tb'
import { FaUserGroup } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

const buttonProps: ButtonProps = {
  className: 'justify-start capitalize',
  variant: 'solid',
  size: 'lg'
}

const iconProps: {
  className: string
  size: number
} = {
  className: 'flex-shrink-0',
  size: 25
}

export default function SideBar () {
  const pathname = usePathname()

  return (
    <div className='h-screen p-4 min-w-60 border-r-small border-default-300 flex flex-col gap-4'>
      <Link
        href='/'
        color='foreground'
        className='flex flex-col gap-2 text-center'
      >
        <FaCameraRetro size={35} className='flex-shrink-0 self-center' />
        <h4 className='font-bold'>CAMPSHOP</h4>
      </Link>

      <Divider orientation='horizontal' />

      <div className='flex flex-col gap-3'>
        <Button
          startContent={<TbLayoutDashboardFilled {...iconProps} />}
          as={Link}
          href='/admin/dashboard'
          color={pathname === '/admin/dashboard' ? 'primary' : 'default'}
          {...buttonProps}
        >
          home
        </Button>

        <Button
          as={Link}
          href='/admin/users'
          startContent={<FaUserGroup {...iconProps} />}
          color={pathname === '/admin/users' ? 'primary' : 'default'}
          {...buttonProps}
        >
          Users
        </Button>
      </div>

      <div className='flex gap-2 items-center'>
        <p className='text-xs uppercase font-bold'>main</p>
        <Divider className='flex-auto' orientation='horizontal' />
      </div>

      {/* -------------- PRODUCT ------------- */}
      <div className='flex flex-col gap-3'>
        <Button
          as={Link}
          href='/admin/users'
          startContent={<FaUserGroup {...iconProps} />}
          color='default'
          {...buttonProps}
        >
          products
        </Button>
        <Button
          as={Link}
          href='/admin/users'
          startContent={<FaUserGroup {...iconProps} />}
          color='default'
          {...buttonProps}
        >
          categories
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
          startContent={<FaUserGroup {...iconProps} />}
          color='default'
          {...buttonProps}
        >
          Orders
        </Button>
        <Button
          as={Link}
          href='/admin/users'
          startContent={<FaUserGroup {...iconProps} />}
          color='default'
          {...buttonProps}
        >
          Transactions
        </Button>
      </div>
    </div>
  )
}
