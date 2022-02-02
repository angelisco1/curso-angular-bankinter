

const promise = fetch('http://jsonplaceholder.typicode.com/posts')
console.log({promise})
promise
  .then((resp) => {
    console.log({resp})
    return resp.json()
  })
  .then(datos => {
    console.log({datos})
  })

console.log('FIN')