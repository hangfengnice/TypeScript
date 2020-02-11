// // function Point (x, y) {
// //   this.x = x
// //   this.y = y
// // }
// // Point.prototype.getPosition = function () {
// //   return "(" + this.x + '.' + this.y + ")"
// // }
// // var p1 = new Point(2, 3)
// // console.log(p1)
// // console.log(p1.getPosition());
// // var p2 = new Point(4, 5)
// // console.log(p2.getPosition());

// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }
//   getPosition () {
//     return `${this.x}, ${this.y}`
//   }
// }
// const p3 = new Point(1, 2)

// console.log(p3);
// console.log(p3.getPosition());
// // console.log(Point());
// console.log(p3.hasOwnProperty('x'));


// var info = {
//   _age: 18,
//   set age(newValue) {
//     if (newValue > 18) {
//       console.log('老了');
//     } else {
//       console.log('还年轻');
//     }
//   },
//   get age () {
//     console.log('问我年纪干什么');
//     return this._age
//   }
// }
// info.age = 20
// console.log(info.age);

// const Infos = class C {
//   constructor() {}
// }
// const testInfo = new Infos()
// function testFunc () {}
// console.log(testFunc.name);

// class Point {
//   constructor (x, y) {
//     this.x = x
//     this.y = y
//   }
//   getPosition () {
//     return `${this.y}. ${this.y}`
//   }
//   static getClassName() {
//     return Point.name
//   }

// }
// let p = new Point(1, 2)
// console.log(p.getPosition());
// console.log(Point.getClassName());

// function testFunc1 () {
//   console.log(new.target);
// }
// testFunc1()
// new testFunc1()

// class Point {
//   constructor () {
//     console.log(new.target);
//   }
// }
// new Point()

// class Parent {
//   constructor () {
//     console.log(new.target);
//   }
// }
// class Son extends Parent {
//   constructor () {
//     super()
//   }
// }
// new Son()

// function Food () {
//   this.type = 'food'
// }
// Food.prototype.getType = function () {
//   return this.type
// }

// function Vegetables (name) {
//   this.name = name
// }

// Vegetables.prototype = new Food()
// const tomato = new Vegetables('tomato')
// console.log(tomato.getType());

// class Parent {
//   constructor (name) {
//     this.name = name
//   }
//   getName( ) {
//     return this.name
//   }
//   static getNames () {
//     return this.name
//   }
// }
// class Child extends Parent { 
//   constructor (name, age) {
//     super(name) 
//     this.age = age
//   }
// }
// const c = new Child('lision', 18)
// console.log(c);
// console.log(c.getName());
// console.log(Parent.getNames(), Child.getNames());
// console.log(Object.getPrototypeOf(Child));

// super 作为函数
// super 作为对象
  //  在普通方法中 -》 父类的原型对象
  //  在静态方法中 -》 父类

// class Parent {
//   constructor () {
//     this.type = 'parent'
//   }
//   getName() {
//     return this.type
//   }
// }
// Parent.getType = () => {
//   return `is parent`
// }

// class Child extends Parent {
//   constructor () {
//     super()
//     console.log('constructor: ' + super.getName());
//   }
//   getParentName() {
//     console.log('getParentName: ' + super.getName())
//   }
//   static getParentType() {
//     console.log('getParentType: ' + super.getType());
//   }
// }
// const c = new Child()
// c.getParentName()
// Child.getParentType()

// class Parent {
//   constructor () {
//     this.name = 'parent'
//   }
//   print () {
//     console.log(this.name);
//   }
// }
// class Child extends Parent {
//   constructor () {
//     super () 
//     this.name = 'child'
//   }
//   childPrint () {
//     super.print()
//   }
// }
// const c = new Child()
// c.childPrint()

// prototype
// __proto__
var objs = new Object()
console.log(objs.__proto__ === Object.prototype);

class CustomArray extends Array {
  constructor (...args) {
    super(...args)
  }
}
const arr = new CustomArray(3)
console.log(arr);
arr.fill('+')
console.log(arr);
console.log(arr.join('_'));