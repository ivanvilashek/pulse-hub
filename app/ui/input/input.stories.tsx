import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    label: {
      type: 'string',
    },
    type: {
      description: 'The type of input, see: MDN',
      defaultValue: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Base: Story = {
  render: (args) => (
    <div className="max-w-xs">
      <Input {...args} />
    </div>
  ),
}
