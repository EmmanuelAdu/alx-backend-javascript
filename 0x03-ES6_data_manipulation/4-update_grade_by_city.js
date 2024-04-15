/**
 * Returns an array of students for a city with newGrades
 * @param {*Array} arrayOfStudents - list of students
 * @param {*String} city - location of students
 * @param {*Array} newGrades - Array of grade objects
 */

export default function updateStudentGradeByCity(arrayOfStudents, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (arrayOfStudents instanceof Array) {
    return arrayOfStudents
      .filter((eachStudent) => eachStudent.location === city)
      .map((eachStudent) => ({
        id: eachStudent.id,
        firstName: eachStudent.firstName,
        location: eachStudent.location,
        grade: (newGrades
          .filter((grade) => grade.StudentId === eachStudent.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
