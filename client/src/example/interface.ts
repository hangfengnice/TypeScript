// const getFullName = ({ firstName, lastName}) => {
//   return `${firstName} ${lastName}`
// }

// getFullName({
//   firstName: "wu",
//   lastName: "hangfeng"
// })

interface NameInfo {
  firstName: string,
  lastName: string
}

const getFullName = ({ firstName, lastName}: NameInfo): string => {
  return `${firstName} ${lastName}`
}

getFullName({
  firstName: "wu",
  lastName: "hangfeng"
})

interface Vegetables {
  color?: string,
  readonly type: string,
  [prop: string]: any
}

const getVegetables = ({ color, type}: Vegetables) => {
  return `A ${color ? (color + ' ') : ""}${type}`
}

const VegetableInfo = {
  color: 'orange',
  type: 'tomato',
  // size: 2
}

let vegetableObj: Vegetables = {
  type: 'tomate'
}

// vegetableObj.type = 'banana'

interface ArrInter {
  0: number,
  readonly 1: string
}

let arr1: ArrInter = [1, 'a']
// arr1[1] = 'aa'
// console.log(getVegetables(VegetableInfo))

// 函数
type AddFunc = (num1: number, num2: number) => number
// const add: AddFunc = (n1, n2) => n1 + n2

// 索引
// interface RoleDic {
//   [id: number]: string
// }
// const role1: RoleDic = {
//   0: 'super_admin'
// }
interface RoleDic {
  [id: string]: string
}
const role2: RoleDic = {
  0: 'super_admin',
  a: 'admin'
}

interface Vegetable1 {
   color: string
}

interface Tomato extends Vegetable1 {
  radius: number
}

interface Carrot {
  length: number
}

const tomato: Tomato = {
  color: 'orange',
  radius: 1,
}

const carrot: Carrot = {
  length: 1
}

interface Counter {
  (): void,
  count: number
}

const getCounter = () => {
  const c = () => c.count ++
  c.count = 0
  return c
}

const counter: Counter = getCounter()
counter()
console.log(counter, counter.count)
