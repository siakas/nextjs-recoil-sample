import type { FC } from 'react'
import { Stack } from '@chakra-ui/react'
import TodoOutputContainer from '@/components/features/todos/container/TodoOutputContainer'

type TodosOutputPresenterProps = {
  todoIds: number[]
}

const TodosOutputPresenter: FC<TodosOutputPresenterProps> = ({ todoIds }) => {
  return (
    <Stack>
      {todoIds.map((id) => (
        <TodoOutputContainer key={id} id={id} />
      ))}
    </Stack>
  )
}

export default TodosOutputPresenter
