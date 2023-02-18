import { atom, useRecoilValue } from 'recoil'

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

const TodoList = () => {
  // 定義した atom の値は useRecoilValue() で取得する
  // useRecoilValue() の引数には atom の戻り値が格納されている変数名を設定する（key 名ではない点に注意）
  // また、useRecoilValue() は状態の取得のみで更新はできない
  const todoList = useRecoilValue(todoListState)
  // console.log(todoList)

  return (
    <div>
      <h1>Recoil による ToDo アプリ</h1>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

export default TodoList
