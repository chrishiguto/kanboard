import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export const Wrapper = styled(animated.div)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding: ${theme.spacings.xsmall};
  `}
`

export const Modal = styled(animated.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 70rem;

    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    flex: 1;
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    border-bottom: 0.1rem solid ${theme.colors.lightGray};
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding: ${theme.spacings.xsmall};

    > button + button {
      margin-left: 0.8rem;
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`
