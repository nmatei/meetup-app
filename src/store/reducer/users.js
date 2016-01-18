import assign from 'object-assign'
import connectActions from 'connectActions'
import c from 'src/store/constant'

let id = 0

const addUser = (state, { payload }) => {
  return [
    ...state,
    assign({}, payload, { id: id++ })
  ]
}

export default connectActions({
  [c.ADD_USER]: addUser
}, [])
