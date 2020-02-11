// enum Status {
//   Uploading,
//   Success,
//   Faild
// }
// console.log(Status[0]);

enum Message {
  Error = 'Sorry, error',
  Success = "Hoho, successs",
  Failed = Error
}
console.log(Message.Failed)

enum Result {
  Faild = 0,
  Success = 'success'
}

// 1. enum E{A}
// 2. enum E {A = 'a'}
// 3. enum E {A = -1}

enum Animals {
  Dog = 1,
  Cat = 2
}

interface Dog {
  type: Animals.Dog
}
const dog: Dog = {
  type: 1
}
console.log(dog);

enum Status {
  Off,
  On
}

interface Light {
  status: Status
}
const light: Light = {
  status: Status.Off
}

const enum Animals1 {
  Dog = 1
}
console.log(Animals1.Dog);

console.log('nice');
