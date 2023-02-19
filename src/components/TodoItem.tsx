import type { FC } from 'react'

type Props = {
  todo: {
    id: number
    title: string
    isComplete: boolean
  }
}

const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <div key={todo.id}>
      {todo.id}: {todo.title}
    </div>
  )
}

export default TodoItem
