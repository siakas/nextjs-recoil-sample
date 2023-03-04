import type { FC } from 'react'
import { useTodoAction } from '@/store/todoState'
import TodosInputPresenter from '@/components/features/todos/presenter/TodosInputPresenter'

const TodosInputContainer: FC = () => {
  const { addTodo } = useTodoAction()

  return <TodosInputPresenter addTodo={addTodo} />
}

export default TodosInputContainer
