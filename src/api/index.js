import request from 'request'

const getGithubInfo = (username) => {
  return request({
    url: `https://api.github.com/users/${username}`
  })
}

export default {
  getGithubInfo
}
