import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    border: none;
    outline: none;

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.primary};
    background: transparent;

    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    cursor: pointer;
    transition: ${theme.transition.fast};

    &:hover {
      border-color: ${darken(0.2, theme.colors.primary)};
      color: ${theme.colors.black};
    }
  `}
`
