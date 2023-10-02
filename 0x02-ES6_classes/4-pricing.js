/*
 * Import the class Currency from 3-currency.js
 * Implement a class named Pricing:
 * Constructor attributes amount(Number) currency(Currency)
 * Each value must be stored in an `underscore` attribute version
 * Implement a getter and a setter for each attribute
 * implement a method called displayFullPrice that returns
 * `amount currency_name (currency_code)`
 * Implement a static method named convertPrice that takes 2 args
 * amount(Number) and conversionRate(Number) and return the amount * conversionRate
 */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency = Currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value = 0) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value = '') {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
    // return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
