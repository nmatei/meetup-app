import store from 'store'

export default {
  loginUsername: store.get('username') || '',
  username: store.get('username') || ''
}
