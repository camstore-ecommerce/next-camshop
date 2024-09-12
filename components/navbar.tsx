'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import { SearchIcon } from '@/components/icons'

import { FaCameraRetro, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathName = usePathname()

  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm'
      }}
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
      }
      type='search'
    />
  )

  return (
    <NextUINavbar maxWidth='xl' position='sticky' isBordered isBlurred={true}>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
            <FaCameraRetro size={15} />
            <p className='font-bold text-inherit'>CAMSHOP</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map(item =>
            item.href === pathName ? (
              <NavbarItem isActive key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: 'primary' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium'
                  )}
                  color='foreground'
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ) : (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium'
                  )}
                  color='foreground'
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            )
          )}
        </ul>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-2'>
          <Link
            isExternal
            aria-label='Facebook'
            href={siteConfig.links.facebook}
          >
            <FaFacebookSquare size={22} />
          </Link>
          <Link
            isExternal
            aria-label='Instagram'
            href={siteConfig.links.instagram}
          >
            <FaInstagram size={22} className='text-pink-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>{searchInput}</NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='/register' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                href='#'
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
