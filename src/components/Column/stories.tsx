import { Story, Meta } from '@storybook/react/types-6-0'
import Column from '.'

export default {
  title: 'Column',
  component: Column,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 300, margin: '0 auto', height: 700 }}>
    <Column title="Title">Content</Column>
  </div>
)
