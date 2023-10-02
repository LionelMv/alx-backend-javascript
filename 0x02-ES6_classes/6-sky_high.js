/*
 * Import Building from 5-building.js.
 * Implement a class named SkyHighBuilding that extends from Building:
 * Constructor attributes: sqft(Number), floors(Number)
 * Each attribute must be stored in an “underscore” attribute version.
 * Implement a getter for each attribute.
 * Override the method named evacuationWarningMessage and return the following string:
 * Evacuate slowly the NUMBER_OF_FLOORS floors.
 */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft = 0, floors = 0) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
