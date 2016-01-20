export default (store) => (next) => (action) => {
  console.info('action: ', action)
  let result = next(action)
  console.info('state: ', store.getState())
  return result
}
