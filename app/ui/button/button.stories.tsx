import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button>Primary</Button>,
}

export const Secondary: Story = {
  render: () => <Button variant={'secondary'}>Secondary</Button>,
}

export const Tertiary: Story = {
  render: () => <Button variant={'tertiary'}>Tertiary</Button>,
}
