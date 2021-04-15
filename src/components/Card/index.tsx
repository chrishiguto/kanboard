import { Draggable, DraggableProvided } from 'react-beautiful-dnd'

import * as S from './styles'

export type CardProps = {
  id: number
  tag?: string
  type: string
  title: string
  date: string
  index: number
  responsible: {
    img: string
    name: string
  }
}

const Card = ({
  tag,
  type,
  title,
  date,
  responsible,
  id,
  index
}: CardProps) => (
  <Draggable draggableId={'task-' + id} index={index}>
    {(provided: DraggableProvided) => (
      <S.Wrapper
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <S.Top hasTag={!!tag}>
          {!!tag && (
            <S.TagContainer>
              <S.Tag>{tag}</S.Tag>
            </S.TagContainer>
          )}
          <S.TypeContainer>
            <S.Type>{type}</S.Type>
          </S.TypeContainer>
          <S.Title>{title}</S.Title>
        </S.Top>

        <S.Bottom>
          <S.Date>{date}</S.Date>
          <S.Responsible>
            <img src={responsible.img} alt={responsible.name} />
          </S.Responsible>
        </S.Bottom>
      </S.Wrapper>
    )}
  </Draggable>
)

export default Card
