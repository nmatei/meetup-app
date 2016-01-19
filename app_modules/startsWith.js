export default function(stack, needle){
  return typeof stack === 'string' && stack.indexOf(needle) === 0
}
