import { Box, Heading } from '@chakra-ui/react'
import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <Box p={10} m="auto" maxW={800}>
      <Heading as="h1" size="2xl">
        トップページ
      </Heading>
      <TodoList />
    </Box>
  )
}
