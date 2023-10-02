import { forwardRef } from 'react'
import Input from 'components/Input'

import * as S from './styles'

type SubmitData = {
  title: string
  author: string
}

export type FormAddCardProps = {
  handleSubmit: (data: SubmitData) => void
}

const FormAddCard: React.ForwardRefRenderFunction<any, FormAddCardProps> = (
  { handleSubmit },
  ref
) => (
  <S.Wrapper ref={ref} onSubmit={handleSubmit}>
    <S.Field>
      <S.Label htmlFor="title">Title</S.Label>
      <Input name="title" id="title" type="text" />
    </S.Field>
    <S.Field>
      <S.Label htmlFor="author">Tag</S.Label>
      <Input name="author" id="author" type="text" />
    </S.Field>
  </S.Wrapper>
)

export default forwardRef(FormAddCard)
