import { useState, type FC } from 'react'
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Switch,
} from '@chakra-ui/react'
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md'
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

  return (
    <>
      <Flex gap={4}>
        <InputGroup>
          <InputLeftAddon>タイトル</InputLeftAddon>
          <Input
            type="text"
            minWidth="15em"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>内容</InputLeftAddon>
          <Input
            type="text"
            minWidth="15em"
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
            }}
          />
        </InputGroup>
        <InputGroup>
          <Button
            colorScheme="telegram"
            leftIcon={<MdAddCircle />}
            borderRadius="full"
            onClick={() => {
              sendTodo()
            }}
          >
            追加
          </Button>
        </InputGroup>
      </Flex>

      <Divider my={6} />

      <Stack>
        {todos.map((todo) => (
          <Flex gap={4} key={todo.id} alignItems="center">
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
        ))}
      </Stack>
    </>
  )
}

export default TodoPresenter
