import type { FC } from 'react'
import { useGetTodoAction, useTodoAction } from '@/store/todoState'
import TodoOutputPresenter from '@/components/features/todos/presenter/TodoOutputPresenter'

type TodoOutputContainerProps = {
  id: number
}

const TodoOutputContainer: FC<TodoOutputContainerProps> = ({ id }) => {
  const { useGetTodo } = useGetTodoAction()
  const { removeTodo, toggleComplete } = useTodoAction()

  const todo = useGetTodo(id)

  const args = {
    todo,
    removeTodo,
    toggleComplete,
  }

  return <TodoOutputPresenter {...args} />
}

export default TodoOutputContainer
