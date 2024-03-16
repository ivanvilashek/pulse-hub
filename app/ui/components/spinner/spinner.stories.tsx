import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './spinner'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  argTypes: {
    speed: {
      type: 'number',
      description: 'The speed of the spinner in seconds.',
    },

    className: {
      description: 'Class name for an element',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Base: Story = {
  render: (args) => (
    <div className="max-w-xs">
      <Spinner {...args} />
    </div>
  ),
}
