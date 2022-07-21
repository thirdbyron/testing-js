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
    this.widthInput = document.querySelector('#width');
    this.heightInput = document.querySelector('#height');
    this.result = document.querySelector('.result');
    console.log(this.result)
  }

  setResult (result) {
    console.log(this.result)
    this.result.textContent = String(result);
  }

  createElement(parent, width, height, result) {
    this.elem.style.width = width + 'px';
    this.elem.style.height = height + 'px';
    this.elem.style.border = '1px solid black';
    this.setResult(result);
    document.querySelector(parent).append(this.elem)
  }

}

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


class Rectangle { 
  constructor () {
    this.width = 40;
    this.height = 50;
  }

  getSquare () {
    return this.width * this.height;
  }
}

class RectangleController {
  constructor (model, view) {
    this.model = model;
    this.view = view;
  }

  init () {
    this.buttonToCreate = document.querySelector('.create');
    this.buttonToCreate.addEventListener('click', this.createRectangle.bind(this))
  }
  
  createRectangle () {
    this.model.width = this.view.widthInput.value; 
    this.model.height = this.view.heightInput.value; 
    console.log(this.model.getSquare())
    this.view.createElement('body', this.model.width, this.model.height, this.model.getSquare())
  }
}

const model = new Rectangle();

const view = new Elem('.test-div')

const controller = new RectangleController(model, view);

controller.init();