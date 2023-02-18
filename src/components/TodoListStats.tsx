import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '@/store/selector'

const TodoListStats = () => {
  const totalNum = useRecoilValue(todoListStatsState)

  return <p>ToDo の登録数：{totalNum}</p>
}

export default TodoListStats
