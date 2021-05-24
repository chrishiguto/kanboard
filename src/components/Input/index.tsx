import { useField } from '@unform/core'
import { useRef } from 'react'
import { useEffect } from 'react'
import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode
  name: string
}

const Input = ({ name, icon, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField /* , error  */ } = useField(
    name
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      }
    })
  })

  return (
    <S.Wrapper>
      {!!icon && <S.Icon>{icon}</S.Icon>}
      <S.Input defaultValue={defaultValue} ref={inputRef} {...props} />
    </S.Wrapper>
  )
}

export default Input
