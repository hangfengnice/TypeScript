// function Point(x, y) {
//   this.x = x
//   this.y = y
// }
// Point.prototype.getPosition = function() {
//   return "(" + this.x + ", " + this.y + ")"
// }
// let p1 = new Point(1, 2)
// console.log(p1)
// console.log(p1.getPosition())

// class Point {

//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   getPosition() {
//     return `(${this.x}, ${this.y})`
//   }
// }
// const p1 = new Point(1, 2)
// console.log(p1)
// console.log(p1.getPosition())
// console.log(p1.hasOwnProperty('x'))
// console.log(p1.hasOwnProperty('getPosition'))

// var info = {
//   _age: 18,
//   set age(value) {
//     if(value >= 18) {
//       console.log('怎么变老了')
//     } else {
//       console.log('我还年轻')
//     }
//   },
//   get age() {
//     console.log('你问我多大干嘛')
//     return this._age
//   }
// }

// info.age
// info.age = 17

// class Info {
//   constructor(age) {
//     this._age = age
//   }
//   set age(value) {
//     console.log('new age: ' + value)
//     this._age = value
//   }
//   get age() {
//     return this._age
//   }
// }
// const info = new Info(10)
// info.age = 18
// console.log(info.age)


// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }

//   getPosition() {
//     return `(${this.x}, ${this.y})`
//   }

//   static getClassName() {
//     return Point.name
//   }
// }

// const p = new Point(1, 2)
// console.log(p.getPosition())
// console.log(Point.getClassName())

class Point {
  func1() {

  }

  _func2() {

  }
}
 