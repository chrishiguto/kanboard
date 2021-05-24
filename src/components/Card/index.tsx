import React, { forwardRef } from 'react'
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps
} from 'react-beautiful-dnd'

import * as S from './styles'

export type CardProps = {
  tag?: string
  type: string
  title: string
  date: string
  responsible: {
    img: string
    name: string
  }
  draggableProps?: DraggableProvidedDraggableProps
  dragHandleProps?: DraggableProvidedDragHandleProps
}

const Card: React.ForwardRefRenderFunction<any, CardProps> = (
  { date, responsible, title, type, tag, dragHandleProps, draggableProps },
  ref
) => (
  <S.Wrapper ref={ref} {...dragHandleProps} {...draggableProps}>
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
)

export default forwardRef(Card)
