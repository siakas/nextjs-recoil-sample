import { Flex, Heading, Select, Stack, Text } from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import AddTodoItem from '@/components/AddTodoItem'
import TodoItem from '@/components/TodoItem'
import TodoListStats from '@/components/TodoListStats'
import TodoListStats2 from '@/components/TodoListStats2'
import { todoListFilterState } from '@/store/atom'
import { filteredTodoListState } from '@/store/selector'

const TodoList = () => {
  // 定義した atom や selector の値は useRecoilValue() で取得する
  // useRecoilValue() は状態の取得のみで更新はできない
  // const todoList = useRecoilValue(todoListState)

  // atom で管理している todoList の state ではなく、
  // selector がフィルタリングして返した todoList の state を取得
  const todoList = useRecoilValue(filteredTodoListState)

  // フィルタ用の state とセッター関数を取得
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  return (
    <div>
      <Heading as="h2" my={4}>
        Recoil による ToDo アプリ
      </Heading>
      <TodoListStats />
      <TodoListStats2 />
      <AddTodoItem />
      <Flex justifyContent="flex-end" alignItems="center" mt={10} mb={4}>
        <Text flexShrink={0} mr={2}>
          表示切り替え：
        </Text>
        <Select
          w="auto"
          cursor="pointer"
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        >
          <option value="すべて">すべて</option>
          <option value="完了">完了</option>
          <option value="未完了">未完了</option>
        </Select>
      </Flex>
      <Text my={4}>現在の表示：{filter}</Text>
      <Stack>
        {todoList.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </Stack>
    </div>
  )
}

export default TodoList
