import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'

import * as CardStyles from 'components/Card/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    background-image: url('/img/background.jpg');
    background-size: cover;
    background-position: center center;

    padding: ${theme.spacings.small};

    * {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`
export const Board = styled.div`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    grid-gap: ${theme.grid.gutter};
    grid-template-columns: repeat(3, 1fr);

    z-index: 999;

    width: 100%;
    max-width: ${theme.grid.container};

    height: 100%;
    margin: 0 auto;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.medium};

    ${CardStyles.Wrapper}:first-child {
      margin-top: ${theme.spacings.xsmall};
    }

    ${CardStyles.Wrapper} + ${CardStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      grid-template-columsn: repeat(3, minmax(30rem, 1fr));
    `}
  `}
`

export const DroppableArea = styled.div`
  ${({ theme }) => css`
    height: 100%;
    overflow-y: auto;
    padding: 0 ${theme.spacings.xsmall};

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: ${theme.border.radius};
      background: ${lighten(0.2, theme.colors.gray)};

      &:hover {
        background: ${theme.colors.gray};
      }
    }
  `}
`
