import Firebase from 'firebase'

const ref = new Firebase('https://meetup-cluj.firebaseio.com/')

const users = ref.child('users');

const addUser = (key, info) => {
  if (info === undefined){
    info = key
    key = info.login
  }
  users.child(key).set(info)
}

const onUsersUpdate = (fn) => {
  users.on('value', (snapshot) => {
    const usersMap = snapshot.val()

    const users = Object.keys(usersMap).reduce((acc, username) => {
      acc.push(usersMap[username])
      return acc
    }, [])

    fn(users)
  })
}

export {
  addUser,
  onUsersUpdate
}
