import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Store range in _range
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Return an instance of Car instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
