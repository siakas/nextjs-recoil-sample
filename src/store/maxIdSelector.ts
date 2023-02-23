import { selector } from 'recoil'
import { SelectorKeys } from '@/store/recoilKeys'
import { todosState } from '@/store/todoState'

// 現在の ToDo リストが持つ Todo の最大の ID を取得
export const maxIdSelector = selector({
  key: SelectorKeys.TODO_MAX_ID,
  get: ({ get }) => {
    return get(todosState).length ? get(todosState).slice(-1)[0].id : 0
  },
})
