import assign from 'object-assign'
import connectActions from 'connectActions'
import c from 'src/store/constant'

const setGithubUsername = (state, { payload }) => {
  return assign({}, state, {
    username: payload
  })
}

export default connectActions({
  [c.SET_GITHUB_USERNAME]: setGithubUsername
})
