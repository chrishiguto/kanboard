import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
  tag: 'Needs review',
  type: 'T',
  title: 'Amending Noxious Weed Seed Rule',
  date: 'Due Aug 31',
  responsible: {
    img: '/img/icon-192.png',
    name: 'Person name'
  }
}

describe('<Card />', () => {
  it('should render the card with tag', () => {
    const { container } = renderWithTheme(<Card {...props} />)

    expect(screen.getByText(/needs review/i)).toBeInTheDocument()
    expect(screen.getByText(/due aug 31/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /amending noxious weed seed rule/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /person name/i })).toHaveAttribute(
      'src',
      props.responsible.img
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the card without tag', () => {
    renderWithTheme(<Card {...props} tag={undefined} />)

    expect(screen.queryByText(/needs review/i)).not.toBeInTheDocument()
    expect(screen.getByText(/due aug 31/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /amending noxious weed seed rule/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /person name/i })).toHaveAttribute(
      'src',
      props.responsible.img
    )
  })
})
