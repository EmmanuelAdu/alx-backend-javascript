/**
 * Returns a boolean if all the elements are in the set
 * @param {*Set} set - A Set Data
 * @param {*Array} array - An Array Data
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
