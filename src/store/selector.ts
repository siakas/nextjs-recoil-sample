import { selector } from 'recoil'
import { todoListState } from '@/store/atom'

// selector は atom の状態を操作して別の処理をおこなう
// ここでは todoListState の配列内のオブジェクトの数を取得して返している
// selector では初期値の設定はおこなわない
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length

    return totalNum
  },
})
