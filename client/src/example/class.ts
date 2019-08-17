// class Point {
//   public x: number
//   public y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   public getPosition() {
//     return `(${this.x}, ${this.y})`
//   }

// }

// const point = new Point(1, 3)
// console.log(point.getPosition())

// class Parent {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// class Child extends Parent {
//   constructor(name: string) {
//     super(name)
//   }
// }

// public

// private 私有的

// class Parent {
//   private age: number
//   constructor(age: number) {
//     this.age = age
//   }
// }

// const p = new Parent(18)
// console.log()

// protected 受保护

class UserInfo {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const userInfo = new UserInfo('hangfeng')
console.log(userInfo)
// userInfo.name = 'hang'

class A {
  constructor(public name: string) {}
}

const a0 = new A('hangfeng')
console.log(a0)

class Parent {
  public static getAge() {
    return Parent.age
  }
  private static age: number = 18
  constructor() {}
}
const p = new Parent()
// console.log(p.age)
// console.log(Parent.age)

class Info {
  public name: string
  public age?: number
  private _infoStr: string
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name
    this.age = age
  }
  get infoStr() {
    return this._infoStr
  }
  set infoStr(value) {
    console.log(`setter: ${value}`)
    this._infoStr = value
  }
}
// const info1 = new Info('hangfeng')
// const info3 = new Info('hangfeng', 18)
const info4 = new Info('hangfeng', 18, 'male')

console.log(info4.infoStr)
info4.infoStr = "hangfeng: 18"
console.log(info4.infoStr)

// abstract class People {
//   constructor(public name: string) {
//   }
//   public abstract printName(): void

// }

// // const p1 = new People()
// class Man extends People {
//   constructor(name: string) {
//     super(name)
//     this.name = name
//   }
//   public printName() {
//     console.log(this.name)
//   }
// }

// const m = new Man('hangfeng')
// m.printName()

// abstract class People {
//   public abstract _name: string
//   abstract get insideName(): string
//   abstract set insideName(value: string)
// }

// class P extends People {
//   public _name: string
//   public insideName: string
// }

class People {
  constructor(public name: string) {
  }
}
const p2 = new People('hangfeng')

class Animal {
  constructor(public name: string) {}
}

interface FoodInterface {
  type: string,
}
class FoodClass implements FoodInterface {
  public type: string
}

class A1 {
  protected name: string
}
interface I extends A1 {}
class B extends A1 implements I {
  public name: string
}
