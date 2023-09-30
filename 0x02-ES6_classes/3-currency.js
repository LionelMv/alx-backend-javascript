/*
 * implement a class named Currency
 * constructor attributes: code(String) name(String)
 * Each attribute must be stored in an 'underscore version'
 * implement a getter and setter attribute
 * implement a method named displayFullCurrency that will return
 * the attributes in the following format name(code).
 */

export default class Currency {
  constructor(code = '', name = '') {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value = '') {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value = '') {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
