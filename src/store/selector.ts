import { selector } from 'recoil'
import { todoListFilterState, todoListState } from '@/store/atom'

// selector は atom の状態を操作して別の処理をおこなう
// ここでは todoListState の配列内のオブジェクトの数を取得して返している
// selector では初期値の設定はおこなわない
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    }
  },
})

// todoListFilterState の値に応じて、todoListState の内容をフィルタリングして返すセレクタ
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case '完了':
        return list.filter((item) => item.isComplete)
      case '未完了':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})
