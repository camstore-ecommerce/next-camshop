'use client'

import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Link } from '@nextui-org/link'
import { useState } from 'react'
import { FaCameraRetro, FaFacebookSquare, FaKey } from 'react-icons/fa'
import { Divider } from '@nextui-org/divider'
import { FcGoogle } from 'react-icons/fc'
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from '@/utils/helper'
import { inputProps } from '@/utils/definitions'
import MailFilledIcon from '@/components/icons/MailFilledIcon'
import EyeSlashFilledIcon from '@/components/icons/EyeSlashFilledIcon'
import EyeFilledIcon from '@/components/icons/EyeFilledIcon'

export default function RegisterForm(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isVisibleConfirmPass, setIsVisibleConfirmPass] =
    useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [phoneNumberError, setPhoneNumberError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('')

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleVisibilityConfirmPass = () =>
    setIsVisibleConfirmPass(!isVisibleConfirmPass)

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

  const onPhoneNumberChange = (phoneNumber: string) => {
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number')
      return
    }

    setPhoneNumberError('')
  }

  const onConfirmPasswordChange = (confirmPassword: string) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Password don't match together")
      return
    }

    setConfirmPasswordError('')
  }

  return (
    <div className='flex flex-col min-h-full  max-w-sm mx-auto mb-12'>
      {/* Top Logo */}
      <div className='flex flex-col text-center items-center gap-1 mx-auto'>
        <FaCameraRetro className='shrink-0' size={35} />
        <h4 className='text-xl font-bold'>Welcome</h4>
        <p>Create an account to get started</p>
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

      <div className='flex mt-6 justify-between items-center'>
        <Divider className='flex-auto' />
        <span className='flex-none mx-2 text-xs text-default-500'>
          OR CONTINUE WITH
        </span>
        <Divider className='flex-auto' />
      </div>

      {/* Form */}
      <form className='flex flex-col mt-6 gap-3' action=''>
        <div className='flex gap-3'>
          <Input
            {...inputProps}
            name='first_name'
            isRequired
            type='text'
            placeholder='First Name'
          />
          <Input
            {...inputProps}
            isRequired
            type='text'
            placeholder='Last Name'
          />
        </div>

        <Input
          {...inputProps}
          startContent={
            <MailFilledIcon className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          isInvalid={emailError !== '' ? true : false}
          onChange={(e) => onEmailChange(e.target.value)}
          isRequired
          errorMessage={emailError}
          type='email'
          placeholder='Email Address'
        />

        <Input
          {...inputProps}
          startContent={<p className='text-default-500 text-sm'>+84</p>}
          isRequired
          type='text'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          errorMessage={phoneNumberError}
          isInvalid={phoneNumberError !== '' ? true : false}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          placeholder='Phone Number'
        />

        <Input
          {...inputProps}
          isRequired
          startContent={
            <FaKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          isInvalid={passwordError !== '' ? true : false}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder='Password'
          value={password}
          onValueChange={setPassword}
          errorMessage={passwordError}
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

        <Input
          {...inputProps}
          startContent={
            <FaKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          onChange={(e) => onConfirmPasswordChange(e.target.value)}
          isRequired
          isInvalid={confirmPasswordError !== '' ? true : false}
          errorMessage={confirmPasswordError}
          placeholder='Confirm Password'
          type={isVisibleConfirmPass ? 'text' : 'password'}
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibilityConfirmPass}
              aria-label='toggle confirm password visibility'
            >
              {isVisibleConfirmPass ? (
                <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
        />

        <Checkbox size='sm' className='mt-1'>
          I agree with the <Link>Terms</Link> and <Link>Privacy Policy</Link>
        </Checkbox>

        <Button className='mt-1' type='submit' color='primary'>
          Sign Up
        </Button>
      </form>

      <div className='flex mt-4 gap-1 items-center justify-center'>
        <p className='text-sm'>Already have an account?</p>
        <Link className='text-sm' href='/login'>
          Log In
        </Link>
      </div>
    </div>
  )
}
