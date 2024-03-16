import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    label: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    type: {
      description: 'The type of input',
      defaultValue: 'text',
    },
    isDisabled: {
      type: 'boolean',
    },
    isInvalid: {
      type: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Base: Story = {
  args: {
    id: 'text',
  },
  render: (args) => (
    <div className="max-w-xs">
      <Input {...args} />
    </div>
  ),
}
