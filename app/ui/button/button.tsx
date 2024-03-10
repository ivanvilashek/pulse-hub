import clsx from 'clsx'
import { ButtonProps } from './button.type'
import { BASE_BUTTON, ButtonVariants } from './button.variants'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...rest
}) => {
  const classNames = clsx(BASE_BUTTON, ButtonVariants[variant], className)

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  )
}
