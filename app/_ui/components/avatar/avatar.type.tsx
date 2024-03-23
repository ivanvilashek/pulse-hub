export type AvatarProps = {
  src?: string | null
  name?: string | null
  className?: string
}

export type AvatarImageProps = AvatarProps & {
  showFallback?: boolean
}

export type AvatarFallbackProps = Omit<AvatarImageProps, 'src'>
