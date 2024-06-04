const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const content = fs.readFileSync(fileName, 'utf-8');
    const totalLines = content.toString().split('\n'); // split based on newLine
    for (let a = 0; a < totalLines.length; a += 1) {
      if (totalLines[a]) {
        length += 1; // keep track of nonempty lines
        const field = totalLines[a].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const l = length - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
