import type { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { maxIdSelector } from '@/store/maxIdSelector'
import { todosState } from '@/store/todoState'
import TodoPresenter from '@/components/features/todos/TodoPresenter'
import type { Todo } from '@/types/todo'

const TodoContainer: FC = () => {
  // const todos = useRecoilValue(todosState)
  const [todos, setTodos] = useRecoilState(todosState)

  const maxId = useRecoilValue(maxIdSelector)

  const addTodo = (title: string, content: string) => {
    const newTodo: Todo = {
      id: maxId + 1,
      title,
      content,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  const props = {
    todos,
    addTodo,
  }

  return <TodoPresenter {...props} />
}

export default TodoContainer
