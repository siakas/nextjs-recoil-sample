import { useRecoilValue } from 'recoil'
import AddTodoItem from '@/components/AddTodoItem'
import TodoItem from '@/components/TodoItem'
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
      <AddTodoItem />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
