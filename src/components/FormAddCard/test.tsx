import { render, screen } from '@testing-library/react'

import FormAddCard from '.'

describe('<FormAddCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormAddCard />)

    expect(screen.getByRole('heading', { name: /FormAddCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
