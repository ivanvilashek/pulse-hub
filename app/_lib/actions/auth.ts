'use server'

import { getUser, signIn } from '@/auth'
import { sql } from '@vercel/postgres'
import { AuthError } from 'next-auth'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { isRedirectError } from 'next/dist/client/components/redirect'

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string({ invalid_type_error: 'Please enter a name.' })
    .min(3, 'Name must contain at least 3 characters'),
  email: z.string({}).email('Please enter a valid email.'),
  password: z
    .string({ invalid_type_error: 'Please enter a password' })
    .min(6, 'Password must contain at least 6 characters'),
})

const SignUp = FormSchema.omit({ id: true })

export type AuthState = {
  errors?: {
    name?: string[]
    email?: string[]
    password?: string[]
  }
  message?: string | null
}

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }

    if (error instanceof Error) {
      return error.message
    }

    throw error
  }
  redirect('/home')
}

export const register = async (prevState: AuthState, formData: FormData) => {
  const validatedFields = SignUp.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to create account.',
    }
  }

  try {
    const { name, email, password } = validatedFields.data

    const user = await getUser(email)

    if (user) {
      throw new Error('User already exist')
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    await sql`
        INSERT INTO users (name, email, password)
        VALUES (${name}, ${email}, ${hashedPassword})
    `
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    if (error instanceof Error) {
      return { message: error.message }
    }
  }
  redirect('/home')
}
