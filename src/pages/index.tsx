import { Box } from '@chakra-ui/react'
import TodoContainer from '@/components/features/todos/TodoContainer'

export default function Home() {
  return (
    <Box p={10} m="auto" maxW={1000}>
      {/* <Heading as="h1" size="2xl">
        トップページyarn
      </Heading> */}
      <TodoContainer />
    </Box>
  )
}
