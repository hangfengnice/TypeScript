// function add(arg1: number, arg2: number): number {
//   return arg1 + arg2
// }
// const add = (arg1: number, arg2: number) => arg1 + arg2
let add: (x: number, y: number) => number
add = (arg1: number, arg2: number): number => arg1 + arg2

type Add = (x: number, y: number) => number
let addFunc
addFunc = (arg1: number, arg2: number): number => arg1 + arg2
addFunc = (arg1, arg2, arg3) => arg1 + arg3 + (arg3 ? arg3 : 0)

type addFunction = (arg1: number, arg2: number, arg3?: number) => number
// let addFunction: addFunction
// addFunction = (x: number, y: number) => x + y
let addFunction = (x: number, y = 3) => x + y

console.log(addFunction(1))

function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map(item => Number(item))
  }
}

console.log(handleData('abc'))
console.log(handleData(123))
