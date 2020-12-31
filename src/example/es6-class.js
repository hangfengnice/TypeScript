function Food() {
  this.type = 'food'
}

Food.prototype.getType = function () {
  return this.type
}


function Vegetable(name) {
  this.name = name
}

Vegetable.prototype = new Food()


const tomato = new Vegetable('tomato')


console.log(tomato, 'tomato');
console.log(tomato.getType());
