import { selector } from 'recoil'
import { todoListFilterState, todoListState } from '@/store/atom'
import { SelectorKeys } from '@/store/recoilKeys'

// selector は atom の状態を操作して別の処理をおこなう
// ここでは todoListState の配列内のオブジェクトの数を取得して返している
// selector では初期値の設定はおこなわない
export const todoListStatsState = selector({
  key: SelectorKeys.TODO_LIST_STATS_STATE,
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isCompleted).length
    const totalUncompletedNum = totalNum - totalCompletedNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    }
  },
})

// atom の `todoListState` に格納されている todo の件数をもとに、
// userId を件数 + 2 を割り当てる
export const userIdState = selector({
  key: SelectorKeys.USER_ID_STATE,
  get: ({ get }) => {
    const userId = get(todoListState).length
      ? get(todoListState).slice(-1)[0].userId
      : 1

    return userId
  },
})

// todoListFilterState の値に応じて、todoListState の内容をフィルタリングして返すセレクタ
export const filteredTodoListState = selector({
  key: SelectorKeys.FILTERED_TODO_LIST_STATE,
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case '完了':
        return list.filter((item) => item.isCompleted)
      case '未完了':
        return list.filter((item) => !item.isCompleted)
      default:
        return list
    }
  },
})

// selector を用いた API データの取得と格納
// export const FetchedTodoList = selector({
//   key: 'FetchedTodoList',
//   get: async ({ get }) => {
//     const res = await axios.get<Todo[]>(
//       'https://jsonplaceholder.typicode.com/todos'
//     )

//     return res.data
//   },
// })
