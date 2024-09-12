'use client'
import Link from 'next/link'
import { FaCameraRetro, FaCopyright } from 'react-icons/fa'
import { Divider } from '@nextui-org/divider'
import NextLink from 'next/link'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FiMapPin } from 'react-icons/fi'
import { FaA, FaArrowRightLong } from 'react-icons/fa6'

export default function Footer () {
  const handleSubcription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hellooo')
  }

  return (
    <footer className='container max-w-7xl mx-auto flex flex-col py-2'>
      <div className=' flex justify-between'>
        <div className='flex flex-col gap-2 w-1/4'>
          <NextLink className='flex justify-start items-center gap-2' href='/'>
            <FaCameraRetro size={40} />
            <h3 className='font-bold text-inherit text-2xl'>CAMSHOP</h3>
          </NextLink>
          <p>CAMSHOP since 2024</p>
          <p>
            “The camera is an instrument that teaches people how to see without
            a camera.”
          </p>
        </div>
        <Divider orientation='vertical' />

        <div className='w-1/4 mx-3'>
          <h4 className='ml-1 font-bold text-xl'>Contact</h4>

          <div className='flex flex-col gap-2 mt-4'>
            <a
              target='_blank'
              href='https://maps.app.goo.gl/2DpC8C2gMQPdgWC4A'
              className='ml-1 underline flex items-center gap-2 hover:underline hover:font-bold'
            >
              <FiMapPin size={32} />
              <p>Han Thuyen Street, Quarter 6P, Thu Duc, Ho Chi Minh City</p>
            </a>
            <a
              href='mailto:camshop@gm.com'
              className='underline flex justify-start items-center gap-2 hover:underline hover:font-bold'
            >
              <CiMail size={25} />
              <p>camshop@gm.com</p>
            </a>
            <a
              href='tel:+84123456789'
              className='mt-2 underline flex justify-start items-center gap-2 hover:underline hover:font-bold'
            >
              <BsTelephone size={20} />
              <p>0123456789</p>
            </a>
          </div>
        </div>
        <Divider orientation='vertical' />

        <div className='w-1/4 mx-3'>
          <h4 className='font-bold text-xl'>FAQ</h4>

          <div className='mt-4 flex flex-col gap-1'>
            <Link href='/' className=' hover:font-bold hover:underline block'>
              Payment Option
            </Link>
            <Link
              href='/'
              className='mt-1 hover:font-bold hover:underline block'
            >
              Contact Details
            </Link>
            <Link
              href='/'
              className='mt-1 hover:font-bold hover:underline block'
            >
              Refund Policy
            </Link>
            <Link
              href='/'
              className='mt-1 hover:font-bold hover:underline block'
            >
              Privacy Policy
            </Link>
            <Link
              href='/'
              className='mt-1 hover:font-bold hover:underline block'
            >
              Shipping
            </Link>
            <Link
              href='/'
              className='mt-1 hover:font-bold hover:underline block'
            >
              Used Item Condition
            </Link>
            <Link
              href='/'
              className='mt-1 hover:font-bold hover:underline block'
            >
              VAT & Customs
            </Link>
            <Link
              href='/'
              className='mt-1 hover:font-bold hover:underline block'
            >
              Warranty
            </Link>
          </div>
        </div>
        <Divider orientation='vertical' />

        <div className='w-1/4 mx-3'>
          <h4 className='font-bold text-xl'>Newsletter Subscription</h4>

          <form className='mt-4' onSubmit={handleSubcription}>
            <Input type='email' variant='bordered' label='Enter your email' />
            <Button type='submit' className='mt-2' size='lg'>
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
