"use strict";
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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello, " + person.firstName + ' ' + person.lastName;
}
var user = new Student('hangfeng', 'ying', 'jiaying');
console.log(user);
console.log(greeter(user));
