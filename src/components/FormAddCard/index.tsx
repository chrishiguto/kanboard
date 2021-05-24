import { forwardRef } from 'react'

import Input from 'components/Input'

import * as S from './styles'

export type FormAddCardProps = {
  handleSubmit: (data: any) => void
}

const FormAddCard: React.ForwardRefRenderFunction<any, FormAddCardProps> = (
  { handleSubmit },
  ref
) => (
  <S.Wrapper ref={ref} onSubmit={handleSubmit}>
    <S.Field>
      <S.Label htmlFor="title">Digite o título</S.Label>
      <Input name="title" id="title" type="text" />
    </S.Field>
    <S.Field>
      <S.Label htmlFor="author">Nome do autor</S.Label>
      <Input name="author" id="author" type="text" />
    </S.Field>
  </S.Wrapper>
)

export default forwardRef(FormAddCard)
