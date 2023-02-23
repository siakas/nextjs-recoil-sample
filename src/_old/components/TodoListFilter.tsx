import { Flex, Select, Text } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '@/store/atom'

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  return (
    <>
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
    </>
  )
}

export default TodoListFilter
