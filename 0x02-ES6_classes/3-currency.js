export default class Currency {
  constructor(code, name) {
    this.code = code; // Using setter for validation
    this.name = name; // Using setter for validation
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display the full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
