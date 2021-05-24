import styled, { css } from 'styled-components'
import { Form } from '@unform/web'

import * as InputStyles from 'components/Input/styles'

export const Field = styled.div`
  ${({ theme }) => css`
    ${InputStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Wrapper = styled(Form)`
  ${({ theme }) => css`
    ${Field} + ${Field} {
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
  `}
`
