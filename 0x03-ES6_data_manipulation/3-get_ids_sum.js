function getStudentIdsSum(students) {
  return students.reduce((acc, c) => acc + c.id, 0);
}

module.exports = getStudentIdsSum;
