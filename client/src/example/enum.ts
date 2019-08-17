const test = 1
const getIndex = () => 2

enum Status {
  Uploading,
  Success,
  Failed
}
console.log(Status.Uploading)
console.log(Status)

enum Message {
  Error = 'Sorry, error',
  Success = 'Hoho, success',
  Faild = Error
}
console.log(Message.Faild)

enum Result {
  Faild = 0,
  Success = 'success'
}

// 1. enum E { A }
// 2. enum E { A = 'a' }
// 3. enum E { A = -1 }

// enum Animal1 {
//   Dog = 1,
//   Cat = 2
// }
// interface Dog {
//    type: Animal1.Dog
// }
// const dog: Dog = {
//   type: 1
// }

enum Status1 {
  Off,
  On
}
interface Light {
  status: Status1
}
const light: Light = {
  status: Status1.Off
}
