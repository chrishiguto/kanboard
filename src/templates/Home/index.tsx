import dynamic from 'next/dynamic'
import { useState } from 'react'

import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const Column = dynamic(import('components/Column'))
const Card = dynamic(import('components/Card'))

import * as S from './styles'

const columns = [
  {
    id: 'column-1',
    title: 'To do',
    tasks: [
      {
        id: 0,
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed RuleX',
        type: 'T',
        tag: 'Needs review',
        responsible: {
          img: '/img/icon-192.png',
          name: 'Nome da pessoa'
        }
      },
      {
        id: 1,
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed RuleS',
        type: 'T',
        tag: 'EMBAIXO',
        responsible: {
          img: '/img/icon-192.png',
          name: 'Nome da pessoa'
        }
      },
      {
        id: 4,
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed <Rule2></Rule2>S',
        type: 'T',
        tag: 'EMBAIXO',
        responsible: {
          img: '/img/icon-192.png',
          name: 'Nome da pessoa'
        }
      }
    ]
  },
  {
    id: 'column-2',
    title: 'In progress',
    tasks: [
      {
        id: 2,
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed RuleT',
        type: 'T',
        tag: 'Needs review',
        responsible: {
          img: '/img/icon-192.png',
          name: 'Nome da pessoa'
        }
      }
    ]
  },
  {
    id: 'column-3',
    title: 'Validation',
    tasks: [
      {
        id: 3,
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed RuleV',
        type: 'T',
        tag: 'Needs review',
        responsible: {
          img: '/img/icon-192.png',
          name: 'Nome da pessoa'
        }
      }
    ]
  }
]

const Home = () => {
  const [data, setData] = useState(columns)

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const sourceColumn = data.filter(
      (column) => column.id === source.droppableId
    )

    const destinationColumn = data.filter(
      (column) => column.id === destination.droppableId
    )

    if (destinationColumn[0].id === sourceColumn[0].id) {
      const newTasksIds = sourceColumn[0].tasks

      const [reorderedItem] = newTasksIds.splice(source.index, 1)
      newTasksIds.splice(destination.index, 0, reorderedItem)

      const newColumn = {
        ...sourceColumn[0],
        tasks: newTasksIds
      }

      const columnToReplaceIndex = data
        .map((d) => d.id)
        .indexOf(sourceColumn[0].id)

      const newData = data

      newData.splice(columnToReplaceIndex, 1, newColumn)

      setData([...newData])
      return
    }

    const sourceNewTasksIds = sourceColumn[0].tasks
    const destinationNewTasksIds = destinationColumn[0].tasks

    const [itemChanged] = sourceNewTasksIds.splice(source.index, 1)

    destinationNewTasksIds.splice(destination.index, 0, itemChanged)

    const newSourceColumn = {
      ...sourceColumn[0],
      tasks: sourceNewTasksIds
    }

    const newDestinationColumn = {
      ...destinationColumn[0],
      tasks: destinationNewTasksIds
    }

    const sourceColumnToReplaceIndex = data
      .map((d) => d.id)
      .indexOf(sourceColumn[0].id)

    const destinationColumnToReplaceIndex = data
      .map((d) => d.id)
      .indexOf(destinationColumn[0].id)

    const newData = data

    newData.splice(sourceColumnToReplaceIndex, 1, newSourceColumn)
    newData.splice(destinationColumnToReplaceIndex, 1, newDestinationColumn)

    console.log(newData)

    setData([...newData])
  }

  return (
    <S.Wrapper>
      <S.Board>
        <DragDropContext onDragEnd={onDragEnd}>
          {data?.map((column, columnIndex) => (
            <Column
              key={column.title + columnIndex}
              title={column.title}
              id={column.id}
            >
              {column?.tasks.map((task, cardIndex) => (
                <Card
                  key={task.title + cardIndex}
                  id={task.id}
                  index={cardIndex}
                  date={task.date}
                  title={task.title}
                  type={task.type}
                  tag={task.tag}
                  responsible={{
                    img: task.responsible.img,
                    name: task.responsible.name
                  }}
                />
              ))}
            </Column>
          ))}
        </DragDropContext>
      </S.Board>
    </S.Wrapper>
  )
}

export default Home
