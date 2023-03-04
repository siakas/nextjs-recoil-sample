import type { FC } from 'react'
import TodosInputContainer from '@/components/features/todos/container/TodosInputContainer'
import TodosOutputContainer from '@/components/features/todos/container/TodosOutputContainer'

const TodosContainer: FC = () => {
  return (
    <>
      <TodosInputContainer />
      <TodosOutputContainer />
    </>
  )
}

export default TodosContainer
