/*
 * Implement a class Airport.
 * Constructor atrributes:
 * name (string)
 * code (string)
 * Each attribute must be stored in an underscore.
 * The default string description of the class should
 * return the airport code.
*/

export default class Airport {
  constructor(name = '', code = '') {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
