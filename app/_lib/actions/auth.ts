'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { isRedirectError } from 'next/dist/client/components/redirect'
import prisma from '../prisma'
import { Routes } from '../constants'
import { getUserByEmail, getUserName } from '../data'

const FormSchema = z.object({
  id: z.string(),
  firstName: z
    .string({ invalid_type_error: 'Please enter a name.' })
    .min(3, 'First name must contain at least 3 characters')
    .regex(/^[a-zA-Z]+$/i, "First name shoudn't contain special chars"),

  lastName: z
    .string({ invalid_type_error: 'Please enter a name.' })
    .min(3, 'Last name must contain at least 3 characters')
    .regex(/^[A-Za-z]+$/i, "Last name shoudn't contain special chars"),

  email: z.string({}).email('Please enter a valid email.'),
  password: z
    .string({ invalid_type_error: 'Please enter a password' })
    .min(6, 'Password must contain at least 6 characters'),
})

const SignUp = FormSchema.omit({ id: true })

export type AuthState = {
  errors?: {
    firstName?: string[]
    lastName?: string[]
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
  redirect(Routes.FEED)
}

export const register = async (prevState: AuthState, formData: FormData) => {
  const validatedFields = SignUp.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
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
    const { firstName, lastName, email, password } = validatedFields.data

    const user = await getUserByEmail(email)

    if (user) {
      throw new Error('User already exist')
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const username = await getUserName()

    await prisma.$executeRawUnsafe(
      `INSERT INTO "User" ("firstName", "lastName", "email", "password", "username") VALUES ($1, $2, $3, $4, $5)`,
      firstName,
      lastName,
      email,
      hashedPassword,
      username
    )

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
  redirect(Routes.FEED)
}
