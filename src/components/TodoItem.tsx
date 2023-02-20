import type { FC } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todoListState } from '@/store/atom'

type Props = {
  todo: {
    id: number
    title: string
    isComplete: boolean
  }
  index: number
}

const TodoItem: FC<Props> = ({ todo, index }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  // アイテム削除のメソッドを定義
  const removeItem = () => {
    // 削除ボタンをクリックしたコンポーネントの id と一致する todoList 内のアイテムのインデックスを取得し、
    // インデックス値の一致するアイテム以外でフィルタリングしてあらたな配列を生成
    const index = todoList.findIndex((listItem) => listItem.id === todo.id)
    const newTodoList = todoList.filter((n, i) => i !== index)

    // todoList へのセッター関数であらたな配列を設定
    setTodoList(newTodoList)
  }

  // アイテムのステータス切り替えのメソッドを定義
  // ToDo: プロパティを切り替えるだけなのに、配列の再生成が必要？ スマートな方法を検討する
  const toggleItemCompletion = () => {
    const index = todoList.findIndex((listItem) => listItem.id === todo.id)
    // console.log(todo.title, index)
    const newTodoList = [
      ...todoList.slice(0, index),
      {
        ...todo,
        isComplete: !todo.isComplete,
      },
      ...todoList.slice(index + 1),
    ]
    setTodoList(newTodoList)
  }

  return (
    <Flex gap={2}>
      <Box
        data-id={todo.id}
        bg="telegram.50"
        p={2}
        borderRadius={4}
        w="100%"
        textDecoration={todo.isComplete ? 'line-through' : ''} // isComplete が true なら text-decoration を有効化
      >
        {index}: {todo.title}（id: {todo.id}）
      </Box>
      <Button colorScheme="telegram" onClick={toggleItemCompletion}>
        {todo.isComplete ? '取消' : '完了'}
      </Button>
      <Button colorScheme="red" onClick={removeItem}>
        削除
      </Button>
    </Flex>
  )
}

export default TodoItem
