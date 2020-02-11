// const getArray = <T>(value: T, times: number = 5): T[]=> {
//   return new Array(times).fill(value)
// }
// console.log(getArray<number>(123,4).map(item => item.toFixed()));

// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//   return new Array(times).fill([param1, param2])
// }

// console.log(getArray(1, 'hello', 3).forEach(item => {
//   console.log(item[0]);
// }));

// let getArray: <T>(arg: T, times: number) => T[]
// getArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg)
// }
// getArray(123, 3).map(item => item.)

// type GetArray = <T>(arg: T, times: number) => T[]
// let getArray: GetArray = (arg: any, times: number) => {
//   return new Array(times).fill(arg)
// }

// interface ValueWithLength {
//   length: number
// }
// const getArray = <T extends ValueWithLength>(arg: T, times): T[] => {
//   return new Array(times).fill(arg)
// }
// console.log(getArray('134', 3));

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}

const objs = {
  a: 'a',
  b: 'b'
}
console.log(getProps(objs, 'a'));
