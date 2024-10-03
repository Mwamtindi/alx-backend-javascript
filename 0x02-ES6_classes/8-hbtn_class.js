export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override valueOf method for number conversion
  valueOf() {
    return this._size;
  }

  // Override toString method for string conversion
  toString() {
    return this._location;
  }
}
