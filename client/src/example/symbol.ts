// const s = Symbol()
// console.log(s)

// const s2 = Symbol()
// console.log(s2)

// console.log(s == s2)
// const s3 = Symbol('hangfeng')
// console.log(s3)
// console.log(s3.toString())
// console.log(Boolean(s3))
// console.log(!s3)

let prop = "name";
const info = {
  // name: "hangfeng"
  [prop]: "hangfeng"
};
console.log(info);

const s5 = Symbol("name");
const info2 = {
  [s5]: "hangfeng",
  age: 18,
  sex: "male"
};
console.log(info2);
info2[s5] = "yingying";
console.log(info2);

// 遍历 Symbol
// for
for (const key of Object.keys(info2)) {
  console.log(key);
}
// Object.keys
console.log(Object.keys(info2));
// Object.getOwnPropertyNames
console.log(Object.getOwnPropertyNames(info2));
// JSON.stringify
console.log(JSON.stringify(info2)); // {"age":18,"sex":"male"}
// 以上均获取不到 Symbol 属性值

console.log(Object.getOwnPropertySymbols(info2)); // [Symbol(name)]
console.log(Reflect.ownKeys(info2)); // ["age", "sex", Symbol(name)]

// Symbol 方法 Symbol.for() Symbol.keyFor()
const s6 = Symbol("hangfeng");
const s7 = Symbol("hangfeng");

const s8 = Symbol.for("hangfeng");
const s9 = Symbol.for("hangfeng"); // s8 === s9 true

console.log(Symbol.keyFor(s8), Symbol.keyFor(s9));

// Symbol.hasInstance
const obj1 = {
  [Symbol.hasInstance](otherobj) {
    console.log(otherobj);
  }
};
console.log({ a: "a" } instanceof (obj1 as any));

class C extends Array {
  constructor(...args) {
    console.log(...args, args);
    super(...args);
  }
  static get [Symbol.species]() {
    return Array;
  }
  getName() {
    return "hangfeng";
  }
}

const c = new C(1, 2, 3);
const a = c.map(item => item + 1);
// console.log(a)
// console.log(a instanceof C)

let obj3 = {
  [Symbol.match](string) {
    console.log();
    console.log(string.length);
  }
};

"abcde".match((obj3 as RegExp));
