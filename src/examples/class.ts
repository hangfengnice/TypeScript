// class Point {
//   x: number
//   y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   getPosition () {
//     return `(${this.x}, ${this.y})`
//   }
// }
// const point = new Point(1, 2)
// console.log(point);

// class Parent {
//   name: string
//   constructor (name: string) {
//     this.name = name
//   }
// }
// class Child extends Parent {
//   constructor (name: string) {
//     super(name)
//   }
// }

// public

// private 私有的

// protected

// class Parent {
//   private age: number
//   constructor (age: number) {
//     this.age = age
//   }
// }
// const p = new Parent(18)
// // console.log(p.age);
// // console.log(Parent.age);

// class Child extends Parent {
//   constructor(age: number) {
//     super(age)
//     console.log(super.age);
//   }
// }

// class Parent {
//   private age: number
//   constructor (age: number) {
//     this.age = age
//     console.log(this.age);
//   }
//   protected getAge() {
//     console.log(this.age);
//     return this.age
//   }
// }

// const p = new Parent(18)
// // console.log(Parent.prototype.getAge());
// // console.log(p.age);

// class Child extends Parent {
//   constructor (age: number) {
//     super(age)
//     // console.log(super.age);
//     console.log("child: ", super.getAge());
//   }
// }
// const c1 = new Child(18)

// class UserInfo {
//   readonly name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// const userInfo = new UserInfo ('hangfeng')
// console.log(userInfo);

// // userInfo.name = 'hello'

// class A {
//   constructor (public name: string) {
//     // this.name = name
//   }
// }

// const a1 = new A('hangfeng')
// console.log(a1.name);

// class Parent {
//   static getAge() {
//     return Parent.age
//   }
//   private static age: number = 18
//   constructor () {}
// }

// const p = new Parent()
// // console.log(p.age);
// // console.log(Parent.age);
// console.log(Parent.getAge());

// class Info {
//   name: string
//   age?: number
//   private _infoStr: string
//   constructor(name: string, age?: number, public sex?: string) {
//     this.name = name
//     this.age = age
//   }

//   get infoStr () {
//     // return `${this.name}: ${this.age}`
//     return this._infoStr
//   }
//   set infoStr (value) {
//     console.log(`setter: ${value}`);
//     this._infoStr = value
//   }
// }
// const info1 = new Info('hangfeng')
// const info3 = new Info('hangfeng', 13)
// const info4 = new Info('hangfeng', 14, "male")
// console.log(info1, info3, info4);
// info4.infoStr = 'hangfeng: 20'
// console.log(info4.infoStr);

// abstract class People {
//   constructor(public name: string) {

//   }
//   public abstract printName(): void
// }
// class Man extends People {
//   constructor (name: string) {
//     super(name)
//     this.name = name
//   }
//   printName () {
//     console.log(this.name);
//   }
// }

// const m = new Man('hangfeng: man')
// m.printName()

// abstract class People {
//   abstract _name: string
//   abstract get insideName(): string
//   abstract set insideName(value: string)
// }
// class P extends People {
//   _name: string
//   insideName: string
// }
// const p = new P()

interface FoodInterface {
  type: string
}

class FoodClass implements FoodInterface {
  type: string
}

class A {
  protected name: string
}
interface I extends A {}
class B extends A implements I {
  name: string
}

const create = <T>(c: new() => T): T => {
  return new c()
}
class Infos {
  age: number
  constructor () {
    this.age = 18
  }
}
create(Infos)
console.log(create<Infos>(Infos).age);
