'use client'

import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon } from '@/components/icons'
import { genders, inputProps } from '@/utils/definitions'
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber
} from '@/utils/helper'
import { Button } from '@nextui-org/button'
import { Input, InputProps } from '@nextui-org/input'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal'
import { Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { FaKey, FaUserPlus } from 'react-icons/fa6'
import { IoMdMale, IoMdFemale } from 'react-icons/io'

export default function UserCreateModal ({
  isOpen,
  onOpenChange
}: {
  isOpen: boolean
  onOpenChange: () => void
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')

  const toggleVisibility = () => setIsVisible(!isVisible)

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

  const handleSubmitCreateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const first_name = formData.get('first_name')
    const last_name = formData.get('last_name')

    console.table({ last_name, first_name })
  }

  const handleExternalSubmit = () => {
    const form = document.getElementById('createUser') as HTMLFormElement

    if (form) form.requestSubmit() // call the handleSubmitCreateUser
  }

  return (
    <Modal
      backdrop='blur'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Add user</ModalHeader>
            <ModalBody>
              <form
                id='createUser'
                className='flex flex-col mt-6 gap-3'
                onSubmit={handleSubmitCreateUser}
              >
                <div className='flex gap-3'>
                  <Input
                    {...inputProps}
                    autoFocus
                    name='first_name'
                    isRequired
                    type='text'
                    placeholder='First Name'
                  />
                  <Input
                    {...inputProps}
                    name='last_name'
                    isRequired
                    type='text'
                    placeholder='Last Name'
                  />
                </div>

                <Input
                  {...inputProps}
                  name='email'
                  startContent={
                    <MailIcon className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  isInvalid={emailError !== '' ? true : false}
                  onChange={e => onEmailChange(e.target.value)}
                  isRequired
                  errorMessage={emailError}
                  type='email'
                  placeholder='Email Address'
                />

                <Input
                  {...inputProps}
                  name='phone'
                  startContent={<p className='text-default-500 text-sm'>+84</p>}
                  isRequired
                  type='text'
                  errorMessage={phoneNumberError}
                  isInvalid={phoneNumberError !== '' ? true : false}
                  onChange={e => onPhoneNumberChange(e.target.value)}
                  placeholder='Phone Number'
                />

                <Input
                  {...inputProps}
                  name='password'
                  isRequired
                  startContent={
                    <FaKey className='text-xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                  isInvalid={passwordError !== '' ? true : false}
                  onChange={e => onPasswordChange(e.target.value)}
                  placeholder='Password'
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

                <div className='flex gap-1'>
                  <Select
                    isRequired
                    items={genders}
                    label='Gender'
                    placeholder='Select gender'
                  >
                    {gender => (
                      <SelectItem
                        startContent={
                          gender.key === 'male' ? (
                            <IoMdMale
                              color='#5ac1f2'
                              className='flex-shrink-0'
                            />
                          ) : (
                            <IoMdFemale
                              color='#f576ab'
                              className='flex-shrink-0'
                            />
                          )
                        }
                        key={gender.key}
                      >
                        {gender.label}
                      </SelectItem>
                    )}
                  </Select>
                  <Select
                    isRequired
                    items={genders}
                    label='Gender'
                    placeholder='Select gender'
                  >
                    {gender => (
                      <SelectItem
                        startContent={
                          gender.key === 'male' ? (
                            <IoMdMale
                              color='#5ac1f2'
                              className='flex-shrink-0'
                            />
                          ) : (
                            <IoMdFemale
                              color='#f576ab'
                              className='flex-shrink-0'
                            />
                          )
                        }
                        key={gender.key}
                      >
                        {gender.label}
                      </SelectItem>
                    )}
                  </Select>
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='flat' onPress={onClose}>
                Close
              </Button>

              <Button
                startContent={
                  <FaUserPlus className='flex-shrink-0' size={20} />
                }
                type='submit'
                color='primary'
                form='createUser'
                onClick={handleExternalSubmit}
              >
                Confirm
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
