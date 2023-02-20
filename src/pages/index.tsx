import { Box } from '@chakra-ui/react'
import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <Box p={5}>
      <h1>トップページ</h1>
      <TodoList />
    </Box>
  )
}
