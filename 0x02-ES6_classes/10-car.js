export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store brand in _brand
    this._motor = motor; // Store motor in _motor
    this._color = color; // Store color in _color
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
