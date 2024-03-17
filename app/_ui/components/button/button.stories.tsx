import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { ButtonVariants } from './button.variants'

const meta: Meta<typeof Button> = {
  // title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: Object.keys(ButtonVariants),
      description:
        'Button variant style, defaults to `primary` if not specified',
    },
    children: {
      description: 'Content of Button component',
      type: 'string',
    },
    isDisabled: { type: 'boolean' },
    isLoading: { type: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
  render: (args) => {
    return <Button {...args}>{args.children}</Button>
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
  render: (args) => {
    return <Button {...args}>{args.children}</Button>
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary',
  },
  render: (args) => {
    return <Button {...args}>{args.children}</Button>
  },
}
