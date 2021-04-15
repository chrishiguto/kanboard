import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Column from '.'

describe('<Column />', () => {
  it('should render the column with title', () => {
    const { container } = renderWithTheme(
      <Column title="Column title">Column content</Column>
    )

    expect(
      screen.getByRole('heading', { name: /column title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/column title/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the column without title', () => {
    renderWithTheme(<Column>Column content</Column>)

    expect(
      screen.queryByRole('heading', { name: /column title/i })
    ).not.toBeInTheDocument()
  })
})
