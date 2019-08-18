// function setProp(target) {
//   return ..
// }
// @setProp

// function setName() {
//   console.log("get setName")
//   return target => console.log("setName")
// }
// function setAge() {
//   console.log('get setAge')
//   return target => console.log('setAge')
// }

// @setName()
// @setAge()
// class ClassDec {

// }

// 类装饰器
let sign = null
function setName(name: string) {
  return (target: new() => any) => {
    sign = target
    console.log(target.name)
  }
}
@setName('hangfeng')
class ClassDec {
  constructor() {}
}

// console.log(sign)
function addName(constructor: new() => any) {
  constructor.prototype.name = 'hangfeng'
}
@addName
class ClassD {

}
const d = new ClassD()
// console.log(d.name)
