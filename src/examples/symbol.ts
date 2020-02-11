const s = Symbol()
console.log(s);

const s2 = Symbol()

// console.log(s === s2);

const s3 = Symbol('hangfeng')

const s4 = Symbol('hangfeng')

// console.log(s3 == s4);

// const s5 = Symbol({name: 'hagnfeng'})

const s5 = Symbol('yingying')
const info = {
  [s5]: 'hangfeng'
}

// const obj1 = {
//   [Symbol.hasInstance] (otherObj: any) {
//     console.log(otherObj);
//   }
// }

// console.log({a: 'a'} instanceof <any>obj1)

let arr1 = [1, 2]
console.log([].concat(arr1, [3, 4]))
arr1[Symbol.isConcatSpreadable] = false
console.log([].concat(arr1, [3,4]));


class C extends Array {
  constructor (...args) {
    super(...args)
  }
  static get [Symbol.species] () {
    return Array
  }
  getName() {
    return 'lision'
  }
}

const c = new C(1, 2, 3)
const a = c.map(item => item + 1)
console.log(a)
console.log(a instanceof C);
console.log(a instanceof Array)

let obj4: unknown = {
  [Symbol.toPrimitive] (type) {
    console.log(type);
  }
}

// const res = (obj4 as number) ++
const res = `hello${obj4}`

let obj5 = {
  [Symbol.toStringTag]: 'hangfeng'
}
let obj7 = {
  [Symbol.toStringTag]() {
    return 'yingying'
  }
}

console.log(obj7.toString());

