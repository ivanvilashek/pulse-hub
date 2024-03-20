import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'
import { DefaultColors } from 'tailwindcss/types/generated/colors'

const { theme } = resolveConfig(tailwindConfig)

const colors = ['green', 'red', 'yellow', 'blue']

const minColorIndex = 5
const maxColorIndex = 8

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  const color = colors[index] as keyof DefaultColors
  const value = theme.colors[color]

  if (!value) return

  const colorIndex =
    Math.floor(Math.random() * (maxColorIndex - minColorIndex + 1)) +
    minColorIndex

  return Object.values(value)[colorIndex]
}
