import { Plus } from '@styled-icons/feather'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'name',
        defaultValue: '',
        error: '',
        registerField: jest.fn()
      }
    }
  }
})

describe('<Input />', () => {
  it('should render the input', () => {
    renderWithTheme(<Input name="name" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render the input with icon', () => {
    renderWithTheme(
      <Input name="name" icon={<Plus aria-label="Input icon" />} />
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/input icon/i)).toBeInTheDocument()
  })
})
