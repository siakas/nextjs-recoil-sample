import { atom } from 'recoil'
import { AtomKeys } from '@/store/recoilKeys'
import type { Todo } from '@/types/todo'

export const todosState = atom({
  key: AtomKeys.TODOS_STATE,
  default: [
    {
      id: 1,
      title: 'テスト1',
      content: 'テスト1の内容',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'テスト2',
      content: 'テスト2の内容',
      isCompleted: true,
    },
  ] as Todo[],
})
