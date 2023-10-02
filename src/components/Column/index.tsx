import { Droppable, DroppableProvided } from 'react-beautiful-dnd'
import { Plus } from '@styled-icons/feather'

import * as S from './styles'
import theme from 'styles/theme'

export type ColumnProps = {
  id: string
  children: React.ReactNode
  title?: string
  handleAdd: (id: string) => void
}

const Column = ({ children, title, id, handleAdd, ...props }: ColumnProps) => (
  <S.Wrapper {...props}>
    {!!title && (
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Add
          role="button"
          onClick={() => handleAdd(id)}
          aria-label={`Add card to column ${title}`}
        >
          <Plus color={theme.colors.darkGray} size={12} />
        </S.Add>
      </S.Header>
    )}
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Column
