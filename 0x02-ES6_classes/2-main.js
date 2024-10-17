import HolbertonCourse from './2-hbtn_course';

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

    static validateArgs(name, length, students) {
        if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
            throw new Error('Invalid arguments');
        }
    }

    constructor(name, length, students) {
        HolbertonCourse.validateArgs(name, length, students);
        this.name = name;
        this.length = length;
        this.students = students;
    }

try {
    HolbertonCourse.validateArgs('ES6', '1', ['Bob', 'Jane']);
} catch(err) {
    console.log(err);  // Validate without creating an object
}
