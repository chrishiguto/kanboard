import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Button
