import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
  `}
`

type TopProps = {
  hasTag: boolean
}

const topModifiers = {
  hasTag: () => css`
    grid-template-areas: 'title type';
  `
}

export const Top = styled.div<TopProps>`
  ${({ theme, hasTag }) => css`
    display: grid;
    grid-template-areas:
      'tag type'
      'title .';
    grid-template-columns: 0.65fr 0.35fr;
    margin-bottom: ${theme.spacings.xsmall};
    word-break: break-word;
    grid-row-gap: calc(${theme.spacings.xsmall} / 2);

    ${!hasTag && topModifiers.hasTag()}
  `}
`

export const TagContainer = styled.div`
  grid-area: tag;
`

export const Tag = styled.span`
  ${({ theme }) => css`
    display: inline-flex;

    padding: calc(${theme.spacings.xxsmall} / 1.5);
    border-radius: calc(${theme.border.radius} / 2);

    text-transform: uppercase;
    font-size: calc(${theme.font.sizes.medium} - 0.5rem);
    color: ${lighten(0.3, theme.colors.mainBg)};
    border: 1px solid ${lighten(0.2, theme.colors.mainBg)};
    background-color: ${theme.colors.mainBg};
  `}
`

export const TypeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: type;
`

export const Type = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};

    height: 2.4rem;
    width: 2.4rem;

    padding: calc(${theme.spacings.xsmall} / 4)
      calc(${theme.spacings.xsmall} / 2);
    border-radius: calc(${theme.border.radius} / 2);
    background-color: ${darken(0.1, theme.colors.gray)};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.bold};
    line-height: 2.4rem;
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Date = styled.p`
  ${({ theme }) => css`
    color: #707990;

    font-size: calc(${theme.font.sizes.xsmall} - 0.1rem);
  `}
`

export const Responsible = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    border-radius: ${theme.border.radius};

    > img {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`
