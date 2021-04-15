import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
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

    padding: calc(${theme.spacings.xsmall} / 4);
    border-radius: calc(${theme.border.radius} / 2);

    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: calc(${theme.font.sizes.medium} - 0.5rem);
    color: #fa6e88;
    background: #fef1f5;
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

    height: 2.4rem;
    width: 2.4rem;

    padding: calc(${theme.spacings.xsmall} / 4)
      calc(${theme.spacings.xsmall} / 2);
    border-radius: calc(${theme.border.radius} / 2);
    background: #ebeef3;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: #707990;

    font-weight: ${theme.font.bold};
    line-height: 2.4rem;
    font-size: ${theme.font.sizes.xsmall};
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
