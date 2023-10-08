/*
 * Implement a class HolbertonClass.
 * Constructor atrributes:
 * size (number)
 * location (string)
 * Each attribute must be stored in an underscore.
 * When the cals is cast into an Number, return size
 * else return location if cast into a String.
*/

export default class HolbertonClass {
  constructor(size = 0, location = '') {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](atr) {
    if (atr === 'number') {
      return `${this._size}`;
    }
    return `${this._location}`;
  }
}
