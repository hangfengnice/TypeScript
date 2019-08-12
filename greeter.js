var mySearch;
mySearch = function (src, sub) {
    return false;
};
// interface Point{
//   readonly x : number
//   readonly y : number
// }
// let p1: Point = {x: 10, y: 11}
// console.log(p1)
// interface Square{
//   color: string
//   area: number
// }
// interface SquareConfig{
//   color?: string
//   width?: number
// }
// function createSquareConfig(config: SquareConfig): Square{
//   let newSquare = {
//     color: 'white',
//     area: 100
//   }
//   if(config.color){
//     newSquare.color = config.color
//   }
//   return newSquare
// }
// let result = createSquareConfig({color: 'black'})
// console.log(result)
// let obj = {
//   a: 'f00',
//   b: 12,
//   c: "bar"
// }
// let {a, ...pass} = obj
// console.log(a,pass)
// // let input:[number,number] = [1,2]
// let [...a] = [1,,2,3,4,]
// console.log(a)
// function f([first, second]: [number, number] ){
//   console.log(first, second)
// }
// f(input)
// function f(input: boolean){
//   let a = 100
//   if(input){
//     let b = a +1
//     return b 
//   }
// }
// let  a = 1
// let num: number = 3
// let someValue: any = "this is String"
// // let strLength:number = (someValue as string).length
// let strLength:number = (<string>someValue).length
// console.log(strLength)
// function warnUser():void{
//   console.log('hello')
// }
// var result = warnUser()
// console.log(result)
// let unuseable: void = undefined
// let notSure: any = 4
// notSure = "hello"
// enum Color{
//   red =1, 
//   green,
//   blue
// }
// let c:Color = Color.green
// console.log(Color)
// console.log(c)
// let isDone: boolean = false
// let list: number[] = [1,2,3]
// let list1: Array<number> = [1,23]
// let x: [string,number]
// x = ['@', 2]
// x[2] = 2
// console.log(x)
/* 类 */
// class User{
//   fullName: string
//   lastName: string
//   firstName: string
//   constructor(firstName: string,lastName: string){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = firstName + " " + lastName
//   }
// }
// interface Person {
//   firstName: string,
//   lastName: string
// }
// function greeter(person: Person){
//   return "hello" + person.firstName + " " + person.lastName
// }
// let user = new User('hang','feng')
// console.log(user)
// console.log(greeter(user))
// interface Person{
//   firstName: string
//   lastName: string
// }
// function greeter(person: Person){
//   return "hello" + person.firstName + " " + person.lastName
// }
// let user = {
//   firstName: "hangfeng",
//   lastName: "yinying"
// }
// console.log(greeter(user))
