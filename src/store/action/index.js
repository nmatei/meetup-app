import c from 'src/store/constant'

const addUser = (user) => {
  return {
    type: c.ADD_USER,
    payload: user
  }
}

const setGithubUsername = (username) => {
  return {
    type: c.SET_GITHUB_USERNAME,
    payload: username
  }
}

const setLoginUsername = (username) => {
  return {
    type: c.SET_LOGIN_USERNAME,
    payload: username
  }
}


export default {
  addUser,
  setGithubUsername,
  setLoginUsername
}
