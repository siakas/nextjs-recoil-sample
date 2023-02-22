import type { NextPage } from 'next'
import { Box, Heading } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { FetchedTodoList } from '@/store/selector'

const SampleApi: NextPage = () => {
  const todoList = useRecoilValue(FetchedTodoList)

  return (
    <Box p={10} m="auto" maxW={800}>
      <Heading as="h1" size="2xl">
        Recoil による SampleApi 取得
      </Heading>
      <div>
        {todoList.map((todo) => (
          <div key={todo.id}>
            {todo.title}: {todo.userId}
          </div>
        ))}
      </div>
    </Box>
  )
}

export default SampleApi
