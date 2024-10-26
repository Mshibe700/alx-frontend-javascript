function getStudentsByLocation(students, city) {
  return students.filter((obj) => obj.location === city);
}

module.exports = getStudentsByLocation;
