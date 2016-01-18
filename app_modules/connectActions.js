export default (map, initialState) => {
  Object.keys(map).forEach(k => {
    if (k === 'undefined' || map[k] == null){
      console.error('Some of the specified constants are undefined!')
    }
  })

  return (state = initialState, action) => {
    const reducer = map[action.type]
    if (reducer){
      return reducer(state, action)
    }

    return state
  }
}
