import { atom } from 'recoil'
import { AtomKeys } from '@/store/recoilKeys'
import type { Todo } from '@/types/todo'

// atom に ToDo リストの初期値の「状態」を定義
export const todoListState = atom({
  key: AtomKeys.TODO_LIST_STATE, // 一意となる名前
  default: [
    {
      userId: 1,
      id: 0,
      title: 'メール送信',
      isCompleted: false,
    },
    {
      userId: 2,
      id: 1,
      title: '部屋の掃除',
      isCompleted: false,
    },
  ] as Todo[],
})

// タスク表示の絞り込み用のキーワードを定義
export const todoListFilterState = atom({
  key: AtomKeys.TODO_LIST_FILTER_STATE,
  default: 'すべて',
})
