// const getArray = <T>(value: T, times: number = 5): T[] => {
//   return new Array(times).fill(value)
// }

// console.log(getArray<number>(2))

// const getArray = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
//   return new Array(times).fill([param1, param2])
// }

// getArray(1, 'a', 3).forEach(item => {
//   console.log(item[0])
//   console.log(item[1])
// })
// type GetArray = <T>(arg: T, times: number) => T[]
// let getArray: GetArray = (param1: any, times: number) => {
//   return new Array(times).fill(param1)
// }

// type GetArray = <T>(arg: T, times: number) => T[]

const getArray = <T>(arg: T, times): T[] => {
  return new Array(times).fill(arg)
}
getArray([1, 2], 3)
getArray(123, 3)
