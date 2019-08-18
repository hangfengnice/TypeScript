// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   let res = {} as T & U
//   res = Object.assign(arg1, arg2)
//   return res
// }
// console.log(mergeFunc({a: "A"}, {b: "B"}))

// 联合类型
// const getLengthFunc = (content: string | number): number => {
//   if (typeof content === 'string') {
//     return content.length
//   } else {
//     return content.toString().length
//   }
// }
// console.log(getLengthFunc(12345))

// 类型保护
const valueList = [123, 'abc']
const getRandomValue = () => {
  const number = Math.random() * 10
  if (number < 5) {
    return valueList[0]
  } else {
    return valueList[1]
  }
}
const item = getRandomValue()
console.log(item)

class CreatedByClass1 {
  public age: number
  constructor() {}
}
class CreatedByClass2 {
  public name: string
  constructor() {}
}

const getRandomItem = () => Math.random() < 0.5 ? new CreatedByClass1() : new CreatedByClass2()
let item1 = getRandomItem()
if (item1 instanceof CreatedByClass1) {
  console.log(item1.age)
} else {
  console.log(item1.name)
}

// null/ undefined
let values = '123'
// values = undefined

const sumFunc = (x: number, y?: number) => x + (y || 0)

const getLengthFunction = (value: string | null): number => (value || '').length
// {
//   if (value === null) {
//     return 0
//   } else {
//     return value.length
//   }
// }

// 类型断言
// function getSpliceStr(num: number | null): string {
//   function getRes(prefix: string) {
//     return prefix + num!.toFixed().toString()
//   }
//   num = num || 0.1
//   return getRes('hangfeng-')
// }
// console.log(getSpliceStr(2.04))

type TypeString = string
let str2: TypeString
type PostionType<T> = {x: T, y: T}
const position: PostionType<number> = {
  x: 1,
  y: 1
}
const position2: PostionType<string> = {
  x: "top",
  y: "left"
}

type Childs<T> = {
  current: T,
  child?: Childs<T>
}
let ccc: Childs<string> = {
  current: 'first',
  child: {
    current: "second"
  }
}
