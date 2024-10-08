function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Step 1: Filter students by the given city
    .map((student) => {
      // Step 2: Find the grade for the current student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // Step 3: Return the student with the new grade or 'N/A' if no grade is found
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
