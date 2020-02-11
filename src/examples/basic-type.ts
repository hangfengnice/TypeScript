// 布尔类型
let bool: boolean = false;

let bool1: boolean;
bool1 = false;

// 数值类型
let num: number = 123;

num = 0b11;
num = 0o1234;
num = 0xad;

// 字符串类型
let str: String;
str = "hello";
str = "hello";
str = `hello`;

// console.log(`字符是${str}`);

// 数组类型
// 写法1
let arr: number[];
arr = [5];

// 写法2
let arr2: Array<number>;
let arr3: (string | number)[];
arr3 = [1, "hello"];

// 元组
let tuple: [string, number, boolean];
tuple = ["a", 123, true];

// 枚举类型

enum Roles {
  SUPER_ADMIN = 8,
  ADMIN,
  USER
}

// console.log(Roles.SUPER_ADMIN, Roles.ADMIN, Roles[8]);

// any类型

let value: any;

value = "ha";
value = 123;

// void类型

const consoleText = (text: string) => {
  console.log(text);
};
console.log(consoleText("hlleo"));

let v: void
v = undefined
// v = null

// null 和 undefined

let u: undefined

u = undefined

let n: null
n = null
// n = "sru"

// never 类型
const errorFunc = (message: string):never => {
  throw new Error(message)
}

const infiniteFunc = (): never => {
  while(true) {}
}

// let neverVariable = (() => {
//   while(true) {}
// })()

// object
let obj = {
  name: 'hangfeng'
}

function getObject(obj: object): void {
  console.log(obj)
}

getObject({name: 'yingying'})

// 类型断言

const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}

console.log(getLength(1234));




