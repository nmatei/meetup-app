import c from 'src/store/constant'

const addUser = (user) => {
  return {
    type: c.ADD_USER,
    payload: user
  }
}

export default {
  addUser
}
