interface NameInfo {
  firstName: string;
  lastName: string;
}
const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`;
};
console.log(getFullName({ firstName: "hang", lastName: "feng" }));

interface Vegetable {
  color?: string;
  readonly type: string;
  // [prop: string]: any
}
const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? color + " " : ""} ${type}`;
};

console.log(
  getVegetables({
    // color: 'red',
    type: "tomato"
  })
);

// console.log(getVegetables({
//   type: 'tomato',
//   color: 'red',
//   size: 2
// }));
const vegetableInfo = {
  type: "tomato",
  color: "red",
  size: 2
};

let vegetableObj: Vegetable = {
  type: "hello"
};
// vegetableObj.type = 'yes'
console.log(getVegetables(vegetableInfo));

interface ArrInter {
  0: number;
  readonly 1: string;
}

let hfarr: ArrInter = [1, "a"];
// hfarr[1] = 'b'

type AddFunc = (num1: number, num2: number) => number;

interface RoleDic {
  [name: string]: string
}

const role1: RoleDic = {
  a: 'super',
  1: 'hleo'
}
interface Vegetables {
  color: string
}
interface Tomato extends Vegetables {
  radius: number
}
interface Carrot {
  length: number
}

const tomato: Tomato = {
  color: 'red',
  radius: 12
}
const carrot: Carrot = {
  length: 14
}

interface Counter {
  (): void,
  count: number
}
const getConter = () : Counter => {
  const c = () => {c.count ++}
  c.count = 0
  return c
}

const counter: Counter = getConter()
counter()
console.log(counter.count);