export default (url) => {
  if (typeof url !== 'string'){
    return new Error('Url must be a string')
  }

  return /^(f|ht)tps?:\/\//i.test(url)
}
