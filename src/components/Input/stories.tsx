import { Story, Meta } from '@storybook/react/types-6-0'
import { Search } from '@styled-icons/feather'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    icon: <Search size={16} strokeWidth={2} />,
    placeholder: 'This is a placeholder...'
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />
