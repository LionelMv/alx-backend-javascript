/*
 * Implement a class named Building:
 * Constructor attributes: sqft(Number).
 * Each value must be stored in an `underscore` attribute version.
 * Implement a getter for each attribute.
 * Consider this class as an abstract class.
 * And make sure that any class that extends from it
 * should implement a method named evacuationWarningMessage.
 * If it does not have this method, throw an error with the message:
 * Class extending Building must override evacuationWarningMessage
 */

export default class Building {
  constructor(sqft = 0) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
