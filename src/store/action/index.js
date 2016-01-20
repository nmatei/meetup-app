import promisedAction from 'promisedAction'
import storage from 'storage'
import c from 'src/store/constant'
import api from 'src/api'
import store from 'src/store'

import {
  onUsersUpdate,
  addUser as firebaseAddUser
} from 'src/firebase'

onUsersUpdate(users => {
  store.dispatch(setUsers(users))
})

const setUsers = (users) => {
  return {
    type: c.SET_USERS,
    payload: users
  }
}

const addUser = (user) => {
  return {
    type: c.ADD_USER,
    payload: user
  }
}

const loadGithubInfo = (username) => {
  storage.set('loginUsername', username)

  return (dispatch) => {
    return promisedAction(
      api.getGithubInfo,
      username,
      c.LOAD_GITHUB_INFO
    )(dispatch).then(user => {
      storage.set('user', user)
      firebaseAddUser(user)
    })
  }
}

const setLoginUsername = (username) => {
  return {
    type: c.SET_LOGIN_USERNAME,
    payload: username
  }
}

const logout = () => {
  return (dispatch) => {
    const user = storage.get('user')

    firebaseAddUser(user.login, null)
    storage.set('user', null)

    dispatch({
      type: c.LOGOUT
    })
  }
}

export default {
  addUser,
  logout,
  loadGithubInfo,
  setLoginUsername
}
