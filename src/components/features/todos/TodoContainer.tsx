import { type FC } from 'react'
import { useRecoilValue } from 'recoil'
import { todosState } from '@/store/todoState'
import TodoPresenter from '@/components/features/todos/TodoPresenter'

const TodoContainer: FC = () => {
  const todos = useRecoilValue(todosState)

  const args = {
    todos,
  }

  return <TodoPresenter {...args} />
}

export default TodoContainer
