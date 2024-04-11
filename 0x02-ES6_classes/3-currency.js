/**
 * Represents a Currency
 */
export default class Currency {
  /**
   * Returns the name and code of currency
   * @param {*String} code - symbol for currency
   * @param {*String} name - name of currency
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the symbol of currency
   */
  get code() {
    return this._code;
  }
  /**
   * Set the value of code
   */

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of currency
   * @returns - the full representation of the currency
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
