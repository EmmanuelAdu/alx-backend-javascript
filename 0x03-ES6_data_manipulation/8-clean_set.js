/**
 * Returns  a string of all the set values that start with a specific string
 * @param {*Set} set - set of array of elements
 * @param {*String} startString - string to start from
 */

export default function cleanSet(set, startString) {
  const extracted = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof (value) === 'string' && value.startsWith(startString)) {
      extracted.push(value.slice(startString.length));
    }
  }
  return extracted.join('-');
}
