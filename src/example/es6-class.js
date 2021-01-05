class Parent {
  constructor() {
    this.name = 'parent'
  }
  print() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor() {
    super()
    this.name = 'child'
  }
  childPrint() {
    super.print()
    console.log(super.name)
  }
}

console.log(Child.__proto__ == Parent)

let c = new Child()

