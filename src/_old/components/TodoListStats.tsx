import { ListItem, List } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '@/store/selector'

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState)

  return (
    <List mb={4} lineHeight={1.7}>
      <ListItem>ToDo の登録数：{totalNum} 件</ListItem>
      <ListItem>完了したタスク：{totalCompletedNum} 件</ListItem>
      <ListItem>未完了のタスク：{totalUncompletedNum} 件</ListItem>
    </List>
  )
}

export default TodoListStats
