/**
 * Returns an array of students for a city with newGrades
 * @param {*Array} arrayOfStudents - list of students
 * @param {*String} city - location of students
 * @param {*Array} newGrades - Array of grade objects
 */

export default function updateStudentGradeByCity(arrayOfStudents, city, newGrades) {
  // const defaultGrade = { grade: 'N/A' };
  if (arrayOfStudents instanceof Array) {
    return arrayOfStudents
      .filter((eachStudent) => eachStudent.location === city)
      .map((eachStudent) => {
        const matchedGrade = newGrades.find((grade) => grade.studentId === eachStudent.id);
        return {
          id: eachStudent.id,
          firstName: eachStudent.firstName,
          location: eachStudent.location,
          grade: matchedGrade ? matchedGrade.grade : 'N/A',
        };
      });
  }
  return [];
}
