let name1 = 'hangfeng'
// name1 = 123
let arr4 = [1, 'a']
arr4 = ['a', 'a']

window.onmousedown = (event) => {
  console.log(event)
}

interface Infos {
  name: string,
  info: {age: number}
}
let infos: Infos
const infos1 = {name: 'hangfeng', info: {age: 18}}
const infos2 = {age: 18}
const infos3 = {name: 'hangfeng', age: 18}
infos = infos1
// infos = infos2
// infos = infos3
console.log(infos)

// 参数个数
