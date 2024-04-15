/**
 * Sums all Ids of students lists
 * @param {*Array} arrayOfStudents - list of students
 * @returns - sum of ids of students
 */

export default function getStudentIdsSum(arrayOfStudents) {
  if (arrayOfStudents instanceof Array) {
    return arrayOfStudents.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
