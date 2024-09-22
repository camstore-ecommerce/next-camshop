'use client'
import Link from 'next/link'
import {
  FaCameraRetro,
  FaCopyright,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa'
import { Divider } from '@nextui-org/divider'
import NextLink from 'next/link'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FormEvent, useEffect, useState } from 'react'
import { MailIcon } from '@/components/icons'
import { validateEmail } from '@/utils/helper'

const faqList: {
  key: string
  label: string
}[] = [
  {
    key: 'payment_options',
    label: 'payment option'
  },
  {
    key: 'contact_details',
    label: 'contact details'
  },
  {
    key: 'refund_policy',
    label: 'refund policy'
  },
  {
    key: 'privacy_policy',
    label: 'privacy policy'
  },
  {
    key: 'shipping',
    label: 'shipping'
  },
  {
    key: 'used_item_condition',
    label: 'used item condition'
  },
  {
    key: 'vat&customs',
    label: 'vat & custom'
  },
  {
    key: 'warranty',
    label: 'warranty'
  }
]

export default function Footer () {
  const [subcriberEmail, setSubcriberEamil] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)
  const [isMdScreen, setIsMdScreen] = useState(false)

  async function onSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!validateEmail(subcriberEmail)) setIsInvalid(true)
    else setIsInvalid(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth > 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <footer className='container max-w-7xl mx-auto flex flex-col py-2'>
      <div className='flex flex-col gap-2 justify-between md:flex-row md:gap-0'>
        <div className='flex flex-col gap-2 md:md:w-1/4 mx-3'>
          <NextLink className='flex justify-start items-center gap-2' href='/'>
            <FaCameraRetro className='shrink-0' size={35} />
            <h3 className='font-bold text-inherit text-2xl'>CAMSHOP</h3>
          </NextLink>
          <p>CAMSHOP since 2024</p>
          <p className='font-bold italic'>
            “The camera is an instrument that teaches people how to see without
            a camera.”
          </p>
        </div>

        {isMdScreen && <Divider orientation='vertical' />}
        <div className='md:md:w-1/4 mx-3'>
          <h4 className='font-bold text-xl'>Contact</h4>

          <div className='flex flex-col gap-2 mt-4'>
            <a
              target='_blank'
              href='https://maps.app.goo.gl/2DpC8C2gMQPdgWC4A'
              className='underline flex items-center gap-2 hover:underline hover:font-bold'
            >
              <FaMapMarkerAlt className='shrink-0 text-default-500' size={20} />
              <p>Han Thuyen Street, Quarter 6P, Thu Duc, Ho Chi Minh City</p>
            </a>
            <a
              href='mailto:camshop@gm.com'
              className='underline flex justify-start items-center gap-2 hover:underline hover:font-bold'
            >
              <MailIcon className='text-default-500 text-xl' />
              <p>camshop@gm.com</p>
            </a>
            <a
              href='tel:+84123456789'
              className='mt-2 underline flex justify-start items-center gap-2 hover:underline hover:font-bold'
            >
              <FaPhoneAlt className='shrink-0 text-default-500' size={20} />
              <p>0123456789</p>
            </a>
          </div>
        </div>
        {isMdScreen && <Divider orientation='vertical' />}

        <div className='md:w-1/4 mx-3'>
          <h4 className='font-bold text-xl'>FAQ</h4>

          <div className='mt-4 flex flex-col gap-1'>
            {faqList.map(item => {
              return (
                <Link
                  key={item.key}
                  href='/'
                  className='hover:font-bold hover:underline block capitalize'
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
        {isMdScreen && <Divider orientation='vertical' />}

        <div className='md:w-1/4 mx-3'>
          <h4 className='font-bold text-xl'>Newsletter Subscription</h4>

          <form className='mt-4' onSubmit={onSubmit}>
            <Input
              value={subcriberEmail}
              onValueChange={setSubcriberEamil}
              startContent={
                <MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
              }
              placeholder='Enter your email'
              variant='bordered'
              errorMessage='Please enter a valid email'
              isInvalid={isInvalid}
            />
            <Button type='submit' className=' w-full' size='md'>
              Subcribe
              <FaArrowRightLong />
            </Button>
          </form>
        </div>
      </div>
      <Link
        className='mt-7 flex justify-center items-center gap-1 text-current'
        href='/'
        title='Copyright'
      >
        <FaCopyright />
        <p className='text-default-600'>2024 CAMSHOP | All Right Reserved</p>
      </Link>
    </footer>
  )
}
