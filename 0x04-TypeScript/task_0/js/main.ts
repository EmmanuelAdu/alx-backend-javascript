export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const studentA: Student {
  firstName: "Emmanuel",
  lastName: "Adu",
  age: 20,
  location: "Kumasi, Ghana",
};

const studentB: Student {
  firstName: "John",
  lastName: "Sefa",
  age: 21,
  location: "Lapaz, Accra",
};

const studentsLists: Array<Student> = [
  studentA,
  studentB,
];
