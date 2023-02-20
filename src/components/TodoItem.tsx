import type { FC } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  todo: {
    id: number
    title: string
    isComplete: boolean
  }
}

const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <Box
      key={todo.id}
      data-id={todo.id}
      bg="telegram.50"
      p={4}
      borderRadius={4}
    >
      {todo.id}: {todo.title}
    </Box>
  )
}

export default TodoItem
