import { Box } from '@chakra-ui/react'
import TodosContainer from '@/components/features/todos/container/TodosContainer'

export default function Home() {
  return (
    <Box p={10} m="auto" maxW={1000}>
      <TodosContainer />
    </Box>
  )
}
