type BaseInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type InputProps = Omit<
  BaseInput,
  'disabled' | 'aria-disabled' | 'readonly' | 'aria-invalid'
> & {
  label?: string
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
}
