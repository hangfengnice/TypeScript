import arrayMap = require('../dist/test-array-map')
console.log(arrayMap([1, 2], (item) => {
  return item + 2
}).forEach( item => console.log(item.toFixed))
)
