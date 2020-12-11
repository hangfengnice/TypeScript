function * generator() {
  try {
    yield ' foo'
  } catch(err) {
    console.log(err.message);
  }
}

var iterator = generator()

var foo = iterator.next()

console.log(foo.value)

iterator.throw(Error('message'))
