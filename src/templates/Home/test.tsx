import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the Home', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/column - to do/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/column - in progress/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/column - validation/i)).toBeInTheDocument()

    /* expect(screen.getAllByText('Amending Noxious Weed Seed Rule')).toHaveLength(
      4
    ) */
  })

  it('should open the add card modal', async () => {
    renderWithTheme(<Home />)

    userEvent.click(screen.getByLabelText(/add card to column to do/i))

    await waitFor(() => {
      expect(screen.getByText(/adicione uma nova tarefa/i)).toBeInTheDocument()
    })
  })

  it('should close the add card modal', async () => {
    renderWithTheme(<Home />)

    userEvent.click(screen.getByLabelText(/add card to column to do/i))

    await waitFor(() => {
      expect(screen.getByText(/adicione uma nova tarefa/i)).toBeInTheDocument()
    })

    userEvent.click(screen.getByLabelText(/cancel button modal/i))

    await waitFor(() => {
      expect(
        screen.queryByText(/adicione uma nova tarefa/i)
      ).not.toBeInTheDocument()
    })
  })

  it('should be able to add a card to a column', async () => {
    renderWithTheme(<Home />)

    userEvent.click(screen.getByLabelText(/add card to column to do/i))

    await waitFor(() => {
      expect(screen.getByText(/adicione uma nova tarefa/i)).toBeInTheDocument()
    })

    const inputs = screen.getAllByRole('textbox')

    userEvent.type(inputs[0], 'hello')
    userEvent.type(inputs[1], 'world')

    userEvent.click(screen.getByLabelText(/confirm button modal/i))

    await waitFor(() => {
      expect(screen.getByText(/hello/i)).toBeInTheDocument()
      expect(screen.getByText(/world/i)).toBeInTheDocument()
    })
  })

  it('should be able to move a card down', async () => {
    const rtlUtils = renderWithTheme(<Home />)
  })
})
