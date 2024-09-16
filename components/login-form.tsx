'use client'

import { EyeFilledIcon } from '@/components/ui/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/components/ui/EyeSlashFilledIcon'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import { Divider } from '@nextui-org/divider'
import { useState } from 'react'
import { FaCameraRetro, FaFacebookSquare, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function LoginForm () {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className='flex flex-col min-h-full max-w-80 mx-auto mb-12'>
      {/* Top Logo */}
      <div className='flex flex-col text-center items-center gap-1 mx-auto'>
        <FaCameraRetro className='shrink-0' size={35} />
        <h4 className='text-xl font-bold'>Welcome Back</h4>
        <p>Login to your account to continue</p>
      </div>

      {/* Form */}
      <form className='flex flex-col mt-6' action=''>
        <Input
          variant='bordered'
          size='md'
          type='email'
          label='Email Address'
        />
        <Input
          className='mt-2'
          variant='bordered'
          size='md'
          label='Password'
          type={isVisible ? 'text' : 'password'}
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
              aria-label='toggle password visibility'
            >
              {isVisible ? (
                <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
        />

        <div className='flex justify-between mt-4'>
          <Checkbox size='sm'>Remember me</Checkbox>

          <Link href='/' size='sm' className='text-default-500'>
            Forgot password?
          </Link>
        </div>

        <Button className='mt-4' type='submit' color='primary'>
          Log In
        </Button>
      </form>

      <div className='flex mt-4 justify-between items-center'>
        <Divider className='w-1/3' />
        <span className='mx-2 text-default-500'>OR</span>
        <Divider className='w-1/3' />
      </div>

      <div className='mt-4 flex gap-1 justify-between'>
        <Button
          className='w-1/2'
          variant='ghost'
          startContent={<FcGoogle size={20} />}
        >
          Google
        </Button>
        <Button
          className='w-1/2'
          variant='ghost'
          startContent={<FaFacebookSquare color='#0059be' size={20} />}
        >
          Facebook
        </Button>
      </div>

      <div className='flex mt-3 gap-1 items-center justify-center'>
        <p>Need to create an account?</p>
        <Link href='/register'>Sign Up</Link>
      </div>
    </div>
  )
}
