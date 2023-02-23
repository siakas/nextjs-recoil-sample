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
} from '@chakra-ui/react'
import { MdAddCircle, MdCheckCircle, MdRemoveCircle } from 'react-icons/md'
import type { Todo } from '@/types/todo'

type Props = {
  todos: Todo[]
}

const TodoPresenter: FC<Props> = ({ todos }) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  return (
    <>
      <Flex gap={4}>
        <InputGroup>
          <InputLeftAddon>タイトル</InputLeftAddon>
          <Input type="text" minWidth="15em" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>内容</InputLeftAddon>
          <Input type="text" minWidth="15em" />
        </InputGroup>
        <InputGroup>
          <Button
            colorScheme="telegram"
            leftIcon={<MdAddCircle />}
            borderRadius="full"
          >
            追加
          </Button>
        </InputGroup>
      </Flex>

      <Divider my={6} />

      <Stack>
        <Flex gap={4}>
          <Box bg="gray.50" p={2} borderRadius={4} w="100%">
            テキストテキスト
          </Box>
          <Button
            leftIcon={<MdCheckCircle />}
            borderRadius="full"
            flexShrink={0}
          >
            完了
          </Button>
          <Button
            leftIcon={<MdRemoveCircle />}
            borderRadius="full"
            flexShrink={0}
          >
            削除
          </Button>
        </Flex>
        <Flex gap={4}>
          <Box bg="gray.50" p={2} borderRadius={4} w="100%">
            テキストテキスト
          </Box>
          <Button
            leftIcon={<MdCheckCircle />}
            borderRadius="full"
            flexShrink={0}
          >
            完了
          </Button>
          <Button
            leftIcon={<MdRemoveCircle />}
            borderRadius="full"
            flexShrink={0}
          >
            削除
          </Button>
        </Flex>
        <Flex gap={4}>
          <Box bg="gray.50" p={2} borderRadius={4} w="100%">
            テキストテキスト
          </Box>
          <Button
            leftIcon={<MdCheckCircle />}
            borderRadius="full"
            flexShrink={0}
          >
            完了
          </Button>
          <Button
            leftIcon={<MdRemoveCircle />}
            borderRadius="full"
            flexShrink={0}
          >
            削除
          </Button>
        </Flex>
      </Stack>
    </>
  )
}

export default TodoPresenter
