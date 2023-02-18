import { atom, selector, useRecoilValue } from 'recoil'

// atom に ToDo リストの初期値の「状態」を定義
const todoListState = atom({
  key: 'todoListState', // 一意となる名前
  default: [
    {
      id: 0,
      title: 'メール送信',
      isComplete: false,
    },
  ],
})

// selector は atom の状態を操作して別の処理をおこなう
// ここでは todoListState の配列内のオブジェクトの数を取得して返している
// selector では初期値の設定はおこなわない
const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length

    return totalNum
  },
})

const TodoList = () => {
  // 定義した atom の値は useRecoilValue() で取得する
  // useRecoilValue() の引数には atom の戻り値が格納されている変数名を設定する（key 名ではない点に注意）
  // また、useRecoilValue() は状態の取得のみで更新はできない
  const todoList = useRecoilValue(todoListState)

  const totalNum = useRecoilValue(todoListStatsState)

  return (
    <div>
      <h1>Recoil による ToDo アプリ</h1>
      <p>ToDo の登録数：{totalNum}</p>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

export default TodoList
