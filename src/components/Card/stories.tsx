import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: 320, margin: '0 auto' }}>
    <Card {...args} />
  </div>
)

Default.args = {
  tag: 'Needs review',
  type: 'T',
  title: 'Amending Noxious Weed Seed Rule'
}
