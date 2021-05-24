import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import {
  DragDropContext,
  DropResult,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided
} from 'react-beautiful-dnd'

import Modal from 'components/Modal'
import Card, { CardProps } from 'components/Card'
import FormAddCard from 'components/FormAddCard'

import * as S from './styles'
import Column from 'components/Column'

const columns = [
  {
    id: 'column-1',
    title: 'To do',
    tasks: [
      {
        id: '1',
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed Rules',
        type: 'T',
        tag: 'Needs review',
        responsible: {
          img: '/img/icon-192.png',
          name: 'Nome da pessoa'
        }
      },
      {
        id: '2',
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed Rule',
        type: 'T',
        tag: 'EMBAIXO',
        responsible: {
          img: '/img/icon-192.png',
          name: 'Nome da pessoa'
        }
      },
      {
        id: '3',
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed Rule',
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
        id: '4',
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed Rule',
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
        id: '5',
        date: 'Due Aug 31',
        title: 'Amending Noxious Weed Seed Rule',
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

export type DataProps = {
  id: string
  title: string
  tasks: Array<CardProps & { id: string }>
}

type DataColumnProps = Array<DataProps>

const Home = () => {
  const [data, setData] = useState<DataColumnProps>(columns)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [columnId, setColumnId] = useState<string | undefined>(undefined)
  const formRef = useRef<HTMLFormElement>(null)

  const getColumn = () => {
    return data.filter((column) => column.id === columnId)[0]
  }

  const replaceColumn = (columnToReplace: string, newColumn: DataProps) => {
    const columnToReplaceIndex = data.map((d) => d.id).indexOf(columnToReplace)

    const newData = data

    newData.splice(columnToReplaceIndex, 1, newColumn)

    return newData
  }

  const replaceColumns = (columns: Array<any>) => {
    const newData = data

    columns.forEach((column) => {
      const columnToReplaceIndex = data.map((d) => d.id).indexOf(column.id)

      if (columnToReplaceIndex < 0) {
        return
      }

      newData.splice(columnToReplaceIndex, 1, column.column)
    })

    return newData
  }

  const handleConfirmModal = () => {
    if (formRef.current) {
      formRef.current.submitForm()
    }
  }

  const handleAddCard = (id: string) => {
    setColumnId(id)
    setIsModalOpen(true)
  }

  const handleSubmitFormAddCard = (datan: any) => {
    const newTask = {
      id: v4(),
      date: 'Due Aug 31',
      title: datan.title,
      type: 'T',
      tag: datan.author,
      responsible: {
        img: '/img/icon-192.png',
        name: 'Nome da pessoa'
      }
    }

    const selectedColumn = getColumn()
    const newTasks = [...selectedColumn.tasks, newTask]

    const newColumn = {
      ...selectedColumn,
      tasks: newTasks
    }

    const newData = replaceColumn(selectedColumn.id, newColumn)

    if (newData) {
      setData([...newData])
    }

    setIsModalOpen(false)
  }

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

      const newData = replaceColumn(sourceColumn[0].id, newColumn)

      if (newData) {
        setData([...newData])
      }
      return
    }

    const sourceNewTasksIds = sourceColumn[0].tasks
    const destinationNewTasksIds = destinationColumn[0].tasks

    const [itemChanged] = sourceNewTasksIds.splice(source.index, 1)

    destinationNewTasksIds.splice(destination.index, 0, itemChanged)

    const newColumnSource = {
      ...sourceColumn[0],
      tasks: sourceNewTasksIds
    }

    const newColumnDestination = {
      ...destinationColumn[0],
      tasks: destinationNewTasksIds
    }

    const cols = [
      {
        id: sourceColumn[0].id,
        column: newColumnSource
      },
      {
        id: destinationColumn[0].id,
        column: newColumnDestination
      }
    ]

    const newData = replaceColumns(cols)

    if (newData) {
      setData([...newData])
    }
  }

  return (
    <S.Wrapper>
      <S.Board>
        <Modal
          title="Adicione uma nova tarefa"
          open={isModalOpen}
          onFailureClick={() => setIsModalOpen(false)}
          onSuccessClick={handleConfirmModal}
        >
          <FormAddCard ref={formRef} handleSubmit={handleSubmitFormAddCard} />
        </Modal>
        <DragDropContext onDragEnd={onDragEnd}>
          {data?.map((column, columnIndex) => (
            <Column
              aria-label={`Column - ${column.title}`}
              key={column.title + columnIndex}
              title={column.title}
              id={column.id}
              handleAdd={() => handleAddCard(column.id)}
            >
              <Droppable droppableId={column.id}>
                {(provided: DroppableProvided) => (
                  <S.DroppableArea
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {column?.tasks.map((task, cardIndex) => (
                      <Draggable
                        key={task.id + cardIndex}
                        draggableId={task.id}
                        index={cardIndex}
                      >
                        {(provided: DraggableProvided) => (
                          <Card
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                            {...task}
                            ref={provided.innerRef}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </S.DroppableArea>
                )}
              </Droppable>
            </Column>
          ))}
        </DragDropContext>
      </S.Board>
    </S.Wrapper>
  )
}

export default Home
