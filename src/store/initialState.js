import storage from 'storage'

export default {
  loginUsername: storage.get('loginUsername') || '',
  user: storage.get('user') || '',
  loading: false,
  users: []
}
