const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store the brand in a regular attribute
    this._motor = motor; // Store the motor in a regular attribute
    this._color = color; // Store the color in a regular attribute
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    // Create a new instance using the same constructor
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
