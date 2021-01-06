
// function setName() {
//   console.log('get setNmae')
//   return (target) => {
//     console.log('setName')
//   }
// }
// function setName1() {
//   console.log('get setNmae')
//   return (target) => {
//     console.log('setName')
//   }
// }
// function setAge1() {
//   console.log('get setAge')
//   return (target) => {
//     console.log('setAge')
//   }
// }

// // function setAge() {
// //   console.log('get setAge')
// //   return () => {
// //     console.log('setAge')
// //   }
// // }

// @setAge1()
// @setName()
// class Foo {

// }

function required(target: any, propertyName: string, index: number) {
  console.log(target, propertyName, index)
}

class A {
  name = 'lision'
  getInfo(@required prefix: string) {
    return prefix
  }
}

let a = new A()
a.getInfo('helo')
