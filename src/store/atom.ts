import { atom } from 'recoil'

// atom に ToDo リストの初期値の「状態」を定義
export const todoListState = atom({
  key: 'todoListState', // 一意となる名前
  default: [
    {
      id: 0,
      title: 'メール送信',
      isComplete: false,
    },
  ],
})
