import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    border: none;
    outline: none;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.darkGray};

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    cursor: pointer;
    transition: ${theme.transition.fast};

    &:hover {
      background-color: ${darken(0.2, theme.colors.darkGray)};
    }
  `}
`
