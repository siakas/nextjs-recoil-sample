import type { FC } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todoListState } from '@/store/atom'
import type { Todo } from '@/types/todo'

type Props = {
  todo: Todo
  index: number
}

const TodoItem: FC<Props> = ({ todo, index }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  // アイテム削除のメソッドを定義
  const removeTodo = (id: number) => {
    // todoList へのセッター関数で、引数の id と一致しない todo をフィルタリングした配列を設定
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  // todo の isCompleted プロパティを切り替えるメソッドを定義
  const toggleTodoComplete = (id: number) => {
    // map() を使ってすべての todo を走査し、
    // 引数 id と一致する todo の isComplted プロパティを反転させて、あらたな配列を生成し、
    // setTodoList で再設定する
    const newTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    setTodoList(newTodoList)
  }

  return (
    <Flex gap={2}>
      <Box
        data-id={todo.id}
        bg={todo.isCompleted ? 'gray.50' : 'telegram.50'}
        p={2}
        borderRadius={4}
        w="100%"
        textDecoration={todo.isCompleted ? 'line-through' : ''} // isCompleted が true なら text-decoration を有効化
      >
        {index}: {todo.title}（id: {todo.id} / userId: {todo.userId}）
      </Box>
      <Button
        onClick={() => {
          toggleTodoComplete(todo.id)
        }}
        colorScheme={todo.isCompleted ? 'gray' : 'telegram'}
      >
        {todo.isCompleted ? '取消' : '完了'}
      </Button>
      <Button
        colorScheme="red"
        onClick={() => {
          removeTodo(todo.id)
        }}
      >
        削除
      </Button>
    </Flex>
  )
}

export default TodoItem
