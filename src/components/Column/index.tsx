import { Droppable, DroppableProvided } from 'react-beautiful-dnd'

import * as S from './styles'

export type ColumnProps = {
  id: string
  children: React.ReactNode
  title?: string
}

const Column = ({ children, title, id }: ColumnProps) => (
  <S.Wrapper>
    {!!title && (
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
    )}
    <Droppable droppableId={id}>
      {(provided: DroppableProvided) => (
        <S.Content ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </S.Content>
      )}
    </Droppable>
  </S.Wrapper>
)

export default Column
