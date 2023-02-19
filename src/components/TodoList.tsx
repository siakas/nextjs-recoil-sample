import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import TodoListStats from '@/components/TodoListStats'
import TodoListStats2 from '@/components/TodoListStats2'
import { todoListState } from '@/store/atom'

const TodoList = () => {
  const [title, setTitle] = useState<string>('')
  const [id, setId] = useState<number>(1)

  // 定義した atom や selector の値は useRecoilValue() で取得する
  // useRecoilValue() は状態の取得のみで更新はできない
  // const todoList = useRecoilValue(todoListState)

  // 定義した atom の値を更新するのは useRecoilState() でおこなう
  // useRecoilState() は atom の値とセッター関数が返される
  const [todoList, setTodoList] = useRecoilState(todoListState)

  // todoListState に値を追加する関数を定義
  // todoListState の更新は useRecoilState の返した setTodoList を使う
  const addTodo = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id,
        title,
        isComplete: false,
      },
    ])
    setTitle('')
    setId(() => id + 1)
  }

  return (
    <div>
      <h1>Recoil による ToDo アプリ</h1>
      <TodoListStats />
      <TodoListStats2 />
      <div style={{ margin: '1em 0' }}>
        <input
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value)
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          {todo.id}: {todo.title}
        </div>
      ))}
    </div>
  )
}

export default TodoList
