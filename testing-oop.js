class Worker  {
  constructor (name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }

  getName () {
    return this._name;
  }

  getSurname () {
    return this._surname;
  }

  setRate(rate) {
    this._rate = rate;
  }

  getRate () {
    return this._rate;
  }

  setDays(days) {
    this._days = days;
  }

  getDays () {
    return this._days;
  }

  getSalary () {
    return this._rate * this._days;
  }

}

const worker = new Worker('Ваня', 'Петров', 14, 15)

console.log(worker.getSalary())
console.log(worker.getSurname())
worker.setDays(16)
console.log(worker.getSalary())

class MyString {
  constructor () {
  }

  reverse (str) {
    console.log(str.split(""))
    return str.split("").reverse().join("");
  }
}

const string = new MyString();

console.log(string.reverse('hallo'))


class Elem {
  constructor (selector) {
    this.elem = document.querySelector(selector)
    this.elem.style.width = 200 + 'px';
    this.elem.style.height = 200 + 'px'
    this.elem.style.border = '1px solid black'
  }

  createElement() {
    document.querySelector('body').append(this.elem)
  }

}

const testDiv = new Elem('.test-div');
console.log(testDiv.elem)
testDiv.createElement()

class Circle {
  #radius
  constructor (radius) {
    this.#radius = radius;
  }

  set radius (radius) {
    this.#radius = radius;
  }

  get radius () {
    return this.#radius;
  }

  getSquare () {
    const PI = Math.PI;
    const diameter = this.radius ** 2;
    return (PI * diameter).toFixed(2);
  }

  getLength () {
    return 2 * this.getSquare();
  }
}

const circle = new Circle(15);

console.log(circle.radius = 25)
console.log(circle.getSquare())
console.log(circle.getLength())
