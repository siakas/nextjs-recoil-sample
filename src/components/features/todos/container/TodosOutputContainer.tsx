import type { FC } from 'react'
import { useGetTodoAction } from '@/store/todoState'
import TodosOutputPresenter from '@/components/features/todos/presenter/TodosOutputPresenter'

const TodosOutputContainer: FC = () => {
  const { todoIds } = useGetTodoAction()

  return <TodosOutputPresenter todoIds={todoIds} />
}

export default TodosOutputContainer
