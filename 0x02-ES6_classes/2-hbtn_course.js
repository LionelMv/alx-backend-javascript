/*
 * Implement a class named HolbertonCourse:
 * Constructor attributes: name, length, students
 * Make sure to verify the type of attributes during object creation
 * Each aattribute must be scored in an underscore att: (_name)
 * Implement a getter and setter for each attribute
 */

export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (typeof students !== 'object') {
      throw TypeError('Students must be an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value = '') {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value = 0) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value = []) {
    if (typeof value !== 'object') {
      throw TypeError('Students must be an array');
    }
    this._students = value;
  }
}
