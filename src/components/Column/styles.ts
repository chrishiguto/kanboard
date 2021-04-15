import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;

    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    text-transform: uppercase;
    color: #707990;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: #e6eef5;
    flex: 1;

    padding: 0 ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
  `}
`
