import {
  atom,
  atomFamily,
  selectorFamily,
  useRecoilCallback,
  useRecoilValue,
} from 'recoil'
import { AtomKeys, SelectorKeys } from '@/store/recoilKeys'
import type { Todo } from '@/types/todo'

// Atom の正規化
// Atom ひとつに ToDo の配列を管理させるのではなく、
// Atom ひとつに対しひとつの ToDo を管理させるようにする
// また、Atom はコンポーネントから直接操作するのではなく、
// カスタムフック経由で取得と変更をおこなうようにするため、export はしない
const todoState = atomFamily<Todo | null, number>({
  key: AtomKeys.TODOS_STATE,
  default: null,
})

// ToDO の ID を管理するための Atom を追加
const todoIdState = atom<number[]>({
  key: AtomKeys.TODO_ID_STATE,
  default: [],
})

// 指定した ID の ToDo を取得
const getTodo = selectorFamily<Todo | null, number>({
  key: SelectorKeys.GET_TODO,
  get:
    (todoId) =>
    ({ get }) =>
      get(todoState(todoId)),
})

let id = 1
const getId = () => {
  return id++
}

// ToDo の追加、削除、完了ステータスの切り替え処理を返すカスタムフック
export const useTodoAction = () => {
  // ToDo の追加処理
  const addTodo = useRecoilCallback(
    // set は特定の Atom や Selector に値を設定するのに使用する
    ({ set }) =>
      (title: string, content: string) => {
        const newTodo: Todo = {
          id: getId(),
          title,
          content,
          isCompleted: false,
        }
        set(todoIdState, (prev) => [...prev, newTodo.id])
        set(todoState(newTodo.id), newTodo)
      },
    []
  )

  // ToDo の削除処理
  const removeTodo = useRecoilCallback(
    // reset は特定の Atom や Selector の値を default 値にする
    // ここでは対象の Atom の値を null に変更している
    ({ set, reset }) =>
      (targetId: number) => {
        set(todoIdState, (prev) => prev.filter((id) => id !== targetId))
        reset(todoState(targetId))
      },
    []
  )

  // ToDo の完了切り替え
  const toggleComplete = useRecoilCallback(
    ({ set }) =>
      (targetId: number) => {
        set(todoState(targetId), (todo) => {
          if (!todo) return null

          return { ...todo, isCompleted: !todo.isCompleted }
        })
      },
    []
  )

  return {
    addTodo,
    removeTodo,
    toggleComplete,
  }
}

// 特定の ToDo と ID 全件を取得するカスタムフック
export const useGetTodoAction = () => {
  const todoIds = useRecoilValue(todoIdState)
  const useGetTodo = (todoId: number) => useRecoilValue(getTodo(todoId))

  return {
    todoIds,
    useGetTodo,
  }
}
