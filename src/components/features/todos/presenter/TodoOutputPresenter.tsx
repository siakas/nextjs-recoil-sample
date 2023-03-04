import type { FC } from 'react'
import { memo } from 'react'
import { Flex, Switch, Button, Box } from '@chakra-ui/react'
import { MdRemoveCircle } from 'react-icons/md'
import type { Todo } from '@/types/todo'

type TodoOutputPresenterProps = {
  todo: Todo | null
  removeTodo: (id: number) => void
  toggleComplete: (id: number) => void
}

const TodoOutputPresenter: FC<TodoOutputPresenterProps> = memo(
  ({ todo, removeTodo, toggleComplete }) => {
    if (!todo) return <></>

    return (
      <Flex gap={4} alignItems="center">
        <Switch
          isChecked={!!todo.isCompleted}
          onChange={() => {
            toggleComplete(todo.id)
          }}
        />
        <Box
          bg="gray.50"
          p={2}
          borderRadius={4}
          w="100%"
          textDecoration={todo.isCompleted ? 'line-through' : ''}
        >
          {todo.id}: 【{todo.title}】{todo.content}
        </Box>
        <Button
          leftIcon={<MdRemoveCircle />}
          borderRadius="full"
          flexShrink={0}
          onClick={() => {
            removeTodo(todo.id)
          }}
        >
          削除
        </Button>
      </Flex>
    )
  }
)

export default TodoOutputPresenter
