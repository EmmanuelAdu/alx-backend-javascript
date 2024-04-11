/**
 * Represents a Holberton Course
 */
export default class HolbertonCourse {
  /**
   * Creates a new@see {@link HolbertonCourse}
   * @param {String} name - name of the course
   * @param {Number} length - How long the course is in months
   * @param {String[]} students - Names of the students in the course
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of the course
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of Hours spent in the course
   */
  get length() {
    return this._length;
  }

  /**
   * Set the length of the course
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the number of students in a course
   */
  get students() {
    return this._students;
  }

  /**
   * Set the number of students
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
