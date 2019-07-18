// function greeter(person: string) {
//   return "Hello, " + person;
// }

// let user = 'hangfeng yingying jiaying';

// let user1 = [1,2,3]

// console.log(greeter(user))

//接口

// interface Person{
//   firstName: string,
//   lastname: string
// }

// function greeter(person: Person){
//   return "hello, " + person.firstName + " " + person.lastname
// }

// let user = {firstName: 'hang',lastname: "feng"}

// console.log(greeter(user))


//  类

class Student{
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName){
    this.fullName = firstName + ' ' + middleInitial + " " + lastName;
  }
}
interface Person{
  firstName: string,
  lastName: string
}
function greeter(person: Person){
  return "hello, " + person.firstName + ' ' + person.lastName
}
let user = new Student('hangfeng', 'ying', 'jiaying')
console.log(user)

console.log(greeter(user))