import { atom } from 'recoil'

// atom に ToDo リストの初期値の「状態」を定義
export const todoListState = atom({
  key: 'todoListState', // 一意となる名前
  default: [
    {
      userId: 1,
      id: 0,
      title: 'メール送信',
      isCompleted: false,
    },
  ],
})

// タスク表示の絞り込み用のキーワードを定義
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'すべて',
})
