import { ButtonVariants } from './button.variants'

export type ButtonVariant = keyof typeof ButtonVariants

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  variant?: ButtonVariant
}
