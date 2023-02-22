import { Heading, Stack } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import AddTodoItem from '@/components/AddTodoItem'
import TodoItem from '@/components/TodoItem'
import TodoListFilter from '@/components/TodoListFilter'
import TodoListStats from '@/components/TodoListStats'
import TodoListStats2 from '@/components/TodoListStats2'
import { filteredTodoListState } from '@/store/selector'

const TodoList = () => {
  // 定義した atom や selector の値は useRecoilValue() で取得する
  // useRecoilValue() は状態の取得のみで更新はできない
  // const todoList = useRecoilValue(todoListState)

  // atom で管理している todoList の state ではなく、
  // selector がフィルタリングして返した todoList の state を取得
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div>
      <Heading as="h2" my={4}>
        Recoil による ToDo アプリ
      </Heading>
      <TodoListStats />
      <TodoListStats2 />
      <AddTodoItem />
      <TodoListFilter />
      <Stack>
        {todoList.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </Stack>
    </div>
  )
}

export default TodoList
