// 布尔类型
// let bool: boolean = false

let bool: boolean;
bool = true;
// bool = 123

// 数值类型
let num: number = 123;
// num = 'abc'
num = 0b1111011;
num = 0o173;
num = 0x7b;

// 字符串类型
let str: string;
str = "abc";
str = `数值是:${num}`;
// console.log(str)

// 数组类型
// [1, 2, 3]
// 写法1
let arr: number[];
// arr = [1, 5, 'str']
arr = [5];
// 写法2
let arr2: Array<number>;
let arr3: (string | number)[];
arr3 = [1, "str"];
// console.log(arr3)

// 元组类型
let tuple: [string, number, boolean];
tuple = ["a", 1, true];

// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}
console.log(Roles.USER);

// any类型
let value: any;
value = "abc";
value = 123;

// void类型
const consoleText = (text: string): void => {
  console.log(text);
};

let v: void;
v = undefined;
v = null;
consoleText("abc");

// null 和 undefined
let u: undefined;
u = undefined;
// u = 123
let n: null;
n = null;
// n = 'null'

// never 类型
const errorFunc = (message: string): never => {
  throw new Error(message);
};
const infiniteFunc = (): never => {
  while (true) {}
};
// let neverValiable = (() => {
//   while(true){}
// })()

// object类型

// 类型断言
const getLength = (target: string | number): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
};
// getLength(123)
