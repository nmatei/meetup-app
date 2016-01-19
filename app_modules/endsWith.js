export default function(stack, needle){
  return typeof stack === 'string' &&
    (stack.lastIndexOf(needle) === stack.length - needle.length)
}
