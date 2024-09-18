'use client'

import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { IoIosSettings, IoMdLogOut } from 'react-icons/io'
import { GrSystem } from 'react-icons/gr'

export default function AdminDropdown () {
  return (
    <Dropdown backdrop='blur'>
      <DropdownTrigger>
        <Avatar
          isBordered
          as='button'
          className='transition-transform'
          src='../static/img/dat_avt.jpg'
        />
      </DropdownTrigger>
      <DropdownMenu aria-label='Profile Actions' variant='solid'>
        <DropdownItem
          startContent={
            <Avatar
              isBordered
              className='transition-transform'
              src='../static/img/dat_avt.jpg'
            />
          }
          key='profile'
          className='h-fit py-3 gap-2 border-b-small border-default-300'
        >
          <p className='font-semibold'>Admin</p>
        </DropdownItem>
        <DropdownItem startContent={<IoIosSettings />} key='settings'>
          Settings
        </DropdownItem>
        <DropdownItem startContent={<GrSystem />} key='system'>
          System
        </DropdownItem>
        <DropdownItem
          startContent={<IoMdLogOut />}
          key='logout'
          color='danger'
          className='text-danger'
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
