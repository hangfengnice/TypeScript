// function add(arg1: number, arg2: number ) {
//   return arg1 + arg2
// }

// const add = (arg1: number, arg2: number) => arg1 + arg2

let add: (x: number, y: number) => number
add = (arg1: number, arg2: number): number => arg1 + arg2
// add = (arg1: string, arg2: number) => arg2 + arg1

type Add = (x: number, y: number) => number

type isString = string

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number

// let AddFunction: AddFunction

// AddFunction = (x: number, y: number, z?: number) => x + y + z
// console.log(AddFunction(1, 2));

let addFunction = (x: number, y = 3) => x + y

console.log(addFunction(1, 4));

function handleData(x: string): string []

function handleData(x: number): string[]

function handleData(x: any): any {
  if(typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map(item => Number(item))
  }
}

console.log(handleData('abc'), handleData(123));

// handleData('abc').map(item => {
//   return item.toFixed()
// })
// handleData(123).map(item => {
//   return item.length
// })