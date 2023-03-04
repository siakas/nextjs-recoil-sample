import type { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { maxIdSelector } from '@/store/maxIdSelector'
import { todosState } from '@/store/todoState'
import TodoPresenter from '@/components/features/todos/TodoPresenter'
import type { Todo } from '@/types/todo'

// Container は Todo アプリのロジックを担当
// 実装したロジックを Presenter に Props として渡す役割
const TodoContainer: FC = () => {
  // const todos = useRecoilValue(todosState)
  const [todos, setTodos] = useRecoilState(todosState)

  const maxId = useRecoilValue(maxIdSelector)

  // Todo の追加
  const addTodo = (title: string, content: string) => {
    const newTodo: Todo = {
      id: maxId + 1,
      title,
      content,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  // Todo の削除
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Todo の isComplete 切り替え
  const toggleComplete = (id: number) => {
    // map() を使ってすべての todo を走査し、
    // 引数 id と一致する todo の isComplted プロパティを反転させて、あらたな配列を生成し、
    // setTodos で再設定する
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    setTodos(newTodos)
  }

  const props = {
    todos,
    addTodo,
    removeTodo,
    toggleComplete,
  }

  return <TodoPresenter {...props} />
}

export default TodoContainer
