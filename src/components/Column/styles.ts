import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    text-transform: uppercase;
    color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
    flex: 1;
    border-radius: ${theme.border.radius};
  `}
`

export const Add = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.4rem;
    width: 2.4rem;

    background: ${theme.colors.white};
    border-radius: 50%;

    cursor: pointer;

    &:hover {
      background-color: ${darken(0.1, theme.colors.white)};
      transition: ${theme.transition.fast};
    }
  `}
`
