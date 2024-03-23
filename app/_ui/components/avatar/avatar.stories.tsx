import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Base: Story = {
  args: {
    src: 'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Pat-3_800x.jpg?v=1603744571',
    name: 'John Doe',
    className: 'h-32 w-32',
  },

  render: (args) => (
    <div className="space-x-3">
      <Avatar {...args} className={args.className} />
      <Avatar name={args.name} className={args.className} />
      <Avatar className={args.className} />
    </div>
  ),
}
