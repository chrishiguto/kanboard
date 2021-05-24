import { Droppable, DroppableProvided } from 'react-beautiful-dnd'
import { Plus } from '@styled-icons/feather'

import * as S from './styles'

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
          onClick={handleAdd}
          aria-label={`Add card to column ${title}`}
        >
          <Plus size={12} />
        </S.Add>
      </S.Header>
    )}
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Column
