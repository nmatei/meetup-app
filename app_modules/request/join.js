import startsWith from 'startsWith'
import endsWith from 'endsWith'

export default (first, second) => {

  if (endsWith(first, '/')) {
    first = first.substring(0, first.length - 1)
  }

  if (!startsWith(second, '/')) {
    second = '/' + second
  }

  return first + second
}
