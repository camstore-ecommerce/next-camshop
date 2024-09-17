'use client'

import { EyeFilledIcon } from '@/components/ui/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/components/ui/EyeSlashFilledIcon'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import { Divider } from '@nextui-org/divider'
import { useState } from 'react'
import { FaCameraRetro, FaFacebookSquare, FaKey } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MailIcon } from '@/components/ui/MailIcon'
import { validateEmail, validatePassword } from '@/utils/helper'
import { login } from '@/lib/actions'
import { useFormState } from 'react-dom'

export default function LoginForm () {
  const [loginState, loginAction] = useFormState(login, undefined)

  const [isVisible, setIsVisible] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const onEmailChange = (email: string) => {
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    setEmailError('')
  }

  const onPasswordChange = (password: string) => {
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long')
      return
    }

    setPasswordError('')
  }

  const toggleVisibility = () => setIsVisible(!isVisible)

  console.log('loginState: ', loginState)

  return (
    <div className='flex flex-col min-h-full max-w-sm mx-auto mb-12'>
      {/* Top Logo */}
      <div className='flex flex-col text-center items-center gap-1 mx-auto'>
        <FaCameraRetro className='shrink-0' size={35} />
        <h4 className='text-xl font-bold'>Welcome Back</h4>
        <p>Login to your account to continue</p>
      </div>

      {/* Form */}
      <form className='flex flex-col mt-6' action={loginAction}>
        <Input
          startContent={
            <MailIcon className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          onChange={e => onEmailChange(e.target.value)}
          variant='bordered'
          size='lg'
          type='email'
          isInvalid={emailError !== '' ? true : false}
          errorMessage={
            emailError !== '' ? emailError : loginState?.errors?.email
          }
          name='email'
          placeholder='Email Address'
          aria-describedby='email-error'
        />

        <Input
          name='password'
          className='mt-3'
          variant='bordered'
          onChange={e => onPasswordChange(e.target.value)}
          size='lg'
          placeholder='Password'
          isInvalid={passwordError !== '' ? true : false}
          errorMessage={
            passwordError !== '' ? passwordError : loginState?.errors?.password
          }
          type={isVisible ? 'text' : 'password'}
          startContent={
            <FaKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
          }
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
          <Checkbox defaultSelected size='sm'>
            Remember me
          </Checkbox>

          <Link href='/' size='sm' className='text-default-500'>
            Forgot password?
          </Link>
        </div>

        <Button className='mt-4' type='submit' color='primary'>
          Log In
        </Button>
      </form>

      <div className='flex mt-6 justify-between items-center'>
        <Divider className='w-1/4' />
        <span className='mx-1 text-xs text-default-500'>OR CONTINUE WITH</span>
        <Divider className='w-1/4' />
      </div>

      <div className='mt-6 flex gap-3 justify-between'>
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

      <div className='flex mt-4 gap-1 items-center justify-center'>
        <p className='text-sm'>Need to create an account?</p>
        <Link href='/register' className='text-sm'>
          Sign Up
        </Link>
      </div>
    </div>
  )
}
