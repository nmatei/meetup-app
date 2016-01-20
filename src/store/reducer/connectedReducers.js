import assign from 'object-assign'
import connectActions from 'connectActions'
import c from 'src/store/constant'
import initialState from '../initialState'

const setGithubUsername = (state, { payload }) => {
  return assign({}, state, {
    username: payload
  })
}

const setLoginUserName = (state, { payload }) => {
  return assign({}, state, {
    loginUsername: payload
  })
}

const setLoading = (state) => {
  return assign({}, state, {
    loading: true
  })
}

const loadGithubInfo = (state, { payload }) => {
  return assign({}, state, {
    user: payload,
    loading: false
  })
}

const logout = (state) => {
  return loadGithubInfo(state, { payload: null })
}

const setUsers = (state, { payload }) => {
  return assign({}, state, {
    users: payload
  })
}

export default connectActions({
  [c.SET_LOGIN_USERNAME]: setLoginUserName,
  [c.SET_GITHUB_USERNAME]: setGithubUsername,
  [c.LOAD_GITHUB_INFO_START]: setLoading,
  [c.LOAD_GITHUB_INFO]: loadGithubInfo,
  [c.LOGOUT]: logout,
  [c.SET_USERS]: setUsers
}, initialState)
