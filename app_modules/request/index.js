import xhr from 'xhr'

import startsWith from 'startsWith'
import endsWith from 'endsWith'
import assign from 'object-assign'

import startsWithHttp from './startsWithHttp'
import join from 'join'

const REST_URL = process.env.REST_URL

export default function(opts){
  opts.json = opts.json || true

  if(!startsWithHttp(opts.url)){
    opts.url = join(REST_URL, opts.url)
  }

  opts.headers = assign({}, {
    'Content-Type': 'application/json'
  }, opts.headers)

  return new Promise(function(resolve, reject){
    xhr(opts, function(err, resp, body){
      if (err || resp.statusCode !== 200) {
        reject(err)
      } else {
        resolve(body)
      }
    })
  })
}
