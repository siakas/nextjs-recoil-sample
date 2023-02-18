import { useRecoilValue } from 'recoil'
import TodoListStats from '@/components/TodoListStats'
import TodoListStats2 from '@/components/TodoListStats2'
import { todoListState } from '@/store/atom'

const TodoList = () => {
  // 定義した atom や selector の値は useRecoilValue() で取得する
  // useRecoilValue() は状態の取得のみで更新はできない
  const todoList = useRecoilValue(todoListState)

  return (
    <div>
      <h1>Recoil による ToDo アプリ</h1>
      <TodoListStats />
      <TodoListStats2 />
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

export default TodoList
