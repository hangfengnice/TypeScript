// function Food(){
//   this.type = "food"
// }
// Food.prototype.getType = function () {
//   return this.type
// }
// function Vegetables(name){
//   this.name = name
// }

// Vegetables.prototype = new Food()
// const tomato = new Vegetables('tomato')
// console.log(tomato)

// class Parent {
//   constructor(name) {
//     this.name = name
//   }

//   getName() {
//     return this.name
//   }

//   static getNames(){
//     return this.name
//   }
// }

// class Child extends Parent {
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }
// }

// const c = new Child('hangfeng', 18)
// console.log(c)
// console.log(c.getName())
// console.log(c instanceof Child, c instanceof Parent)
// console.log(Child.getNames())

class Parent {
  constructor() {
    this.name = "parent"
  }
  print() {
    console.log(this.name)
  }
}

class Child extends Parent {
  constructor(){
    super()
    this.name = 'child'
  }
  childPrint() {
    super.print()
  }
}

const c = new Child()
c.childPrint()

class CustomArray extends Array {
  constructor(...args) {
    super(...args);
    
  }
  
}

const arr = new CustomArray(3)
console.log(arr)
arr.fill('+')
console.log(arr)
console.log(arr.join("_"))
