/**
 * Returns an updated map for all items with initial quantity at 1
 * @param {*Map} map - a list of elements in a map
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((key, value) => {
    if (key === 1) {
      map.set(value, 100);
    }
  });
}
