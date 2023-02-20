import { useState } from 'react'
import { Box, Button, Flex, Input } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '@/store/atom'

const AddTodoItem = () => {
  const [title, setTitle] = useState<string>('')
  const [id, setId] = useState<number>(1)

  // 定義した atom の値を更新するのは useRecoilState() でおこなう
  // useRecoilState() は atom の値とセッター関数が返される
  // const [todoList, setTodoList] = useRecoilState(todoListState)

  // atom を更新するためのセッター関数を取得するだけなら
  // useRecoilState() ではなく、useSetRecoilState() で OK
  const setTodoList = useSetRecoilState(todoListState)

  // todoListState に値を追加する関数を定義
  // todoListState の更新は useRecoilState の返した setTodoList を使う
  const addTodo = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id,
        title,
        isComplete: false,
      },
    ])
    setTitle('')
    setId(() => id + 1)
  }

  return (
    <Box my={5}>
      <Flex gap={2}>
        <Input
          placeholder={`${id + 1}件目のToDoを入力します`}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <Button onClick={addTodo} colorScheme="telegram">
          Add
        </Button>
      </Flex>
    </Box>
  )
}

export default AddTodoItem
