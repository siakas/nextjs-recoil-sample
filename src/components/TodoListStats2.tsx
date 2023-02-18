import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '@/store/selector'

const TodoListStats2 = () => {
  const totalNum = useRecoilValue(todoListStatsState)

  return <p>ToDo の登録数（複製）：{totalNum}</p>
}

export default TodoListStats2
