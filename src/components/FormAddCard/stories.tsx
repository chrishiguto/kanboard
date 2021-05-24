import { Story, Meta } from '@storybook/react/types-6-0'
import FormAddCard from '.'

export default {
  title: 'FormAddCard',
  component: FormAddCard
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 300, margin: '0 auto' }}>
    <FormAddCard />
  </div>
)
