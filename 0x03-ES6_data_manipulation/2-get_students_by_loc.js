/**
 * Retrieves List of students in a specific city
 * @param {*Array} array - Lists of students
 * @param {*String} city - Location or city of students
 */
export default function getStudentsByLocation(array, city) {
  if (array instanceof Array) {
    return array.filter((eachStudent) => eachStudent.location === city);
  }
  return [];
}
