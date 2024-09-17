'use server'

import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address'
  }).trim(),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long'
  }).trim()
})

export type LoginState = | {
  errors?: {
    email?: string[],
    password?: string[]
  },
  message?: string
} | undefined

export async function login(state: LoginState, formData: FormData) {
  // Validate with zod
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  // If FAILED
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid email or password, try again.'
    }
  }

  // Check from db
  const { email, password } = validatedFields.data

  return {
    form: { email, password },
    message: 'Login success'
  }
}