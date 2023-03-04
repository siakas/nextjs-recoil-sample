// Atom や Selector の Key の重複を避けるために、
// Key を一元管理して把握しやすくする
export const AtomKeys = {
  TODOS_STATE: 'todosState',
  TODO_ID_STATE: 'todoIdState',
}

export const SelectorKeys = {
  TODO_MAX_ID: 'todoMaxId',
  GET_TODO: 'getTodo',
}
