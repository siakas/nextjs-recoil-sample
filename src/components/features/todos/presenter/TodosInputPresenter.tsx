import type { FC } from 'react'
import { useState } from 'react'
import {
  Flex,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Divider,
} from '@chakra-ui/react'
import { MdAddCircle } from 'react-icons/md'

type TodosInputPresenterProps = {
  addTodo: (title: string, content: string) => void
}

const TodosInputPresenter: FC<TodosInputPresenterProps> = ({ addTodo }) => {
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
    </>
  )
}

export default TodosInputPresenter
