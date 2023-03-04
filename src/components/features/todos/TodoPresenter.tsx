import { useState, type FC } from 'react'
import type { Todo } from '@/types/todo'

type Props = {
  todos: Todo[]
  addTodo: (title: string, content: string) => void
  removeTodo: (id: number) => void
  toggleComplete: (id: number) => void
}

// Presenter はアプリの表示部分を担当
const TodoPresenter: FC<Props> = ({
  todos,
  addTodo,
  removeTodo,
  toggleComplete,
}) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const sendTodo = () => {
    addTodo(title, content)
    setTitle('')
    setContent('')
  }

  return <></>
}

export default TodoPresenter
