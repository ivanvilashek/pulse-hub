export const getInitials = (name: string) =>
  name
    .trim()
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase())
    .join('')
