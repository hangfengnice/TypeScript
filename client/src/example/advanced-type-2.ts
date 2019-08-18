class Counter {
   constructor(public count: number = 0) {
   }
   public add(value: number) {
      this.count += value
      return this
   }
   public substract(value: number) {
     this.count -= value
     return this
   }
 }

let counter1 = new Counter(10)
console.log(counter1)
console.log(counter1.add(3).substract(2))

class PowCounter extends Counter {
   constructor(public count: number = 0) {
     super(count)
   }
   public pow(value: number) {
     this.count = this.count ** value
     return this
   }
 }

let powCounter = new PowCounter(2)
console.log(powCounter.pow(3).add(1).substract(3))

// 索引类型 keyof
interface InfoInterfaceAdvanced {
  name: string,
  age: number
}
let infoProp: keyof InfoInterfaceAdvanced
infoProp = 'name'
infoProp = "age"

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
  return names.map(n => obj[n])
}
const infoObj = {
  name: "hangfeng",
  age: 18
}
let infoValues: (string | number)[] = getValue(infoObj, ['name', 'age'])
console.log(infoValues)

// 索引访问操作符
type nameTypes = InfoInterfaceAdvanced['name']

interface Info1 {
  age: number,
  name: string,
  sex: string
}
type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P]
}
type ReadonlyInfo1 = ReadonlyType<Info1>
let info1: ReadonlyInfo1 = {
  age: 18,
  name: 'hangfeng',
  sex: 'male'
}
// info1.name = 'yingying'

// unknown

let value4: unknown
// value4 += 1

type type1 = string & unknown
type type2 = number & unknown
type type3 = unknown & unknown

type type5 = unknown | string
type type6 = unknown | any
type type7 = unknown | number[]

type type8 = never extends unknown ? true : false

type type9 = keyof unknown

type Types1<T> = {
  [P in keyof T]: number
}
type type11 = Types1<any>
type type12 = Types1<unknown>
