import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};

    padding: calc(${theme.spacings.xsmall} - 0.2rem);
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.white};

    &:focus-within {
      border: 0.2rem solid ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    margin-right: calc(${theme.spacings.xsmall} - 0.2rem);
    color: ${theme.colors.gray};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: none;
    background: inherit;
    flex: 1;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`
