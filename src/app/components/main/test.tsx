import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o compoennte
    const { container } = render(<Main></Main>)

    //busca o elemento e verifica a existencia
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
