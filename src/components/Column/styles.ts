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
    color: #707990;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: #e6eef5;
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

    background: #e6eef5;
    border-radius: 50%;

    cursor: pointer;

    &:hover {
      background-color: ${darken(0.1, '#e6eef5')};
      transition: ${theme.transition.fast};
    }
  `}
`
