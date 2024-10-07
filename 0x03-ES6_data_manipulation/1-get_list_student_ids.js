// 1-get_list_student_ids.js
export default function getListStudentIds(arry) {
  if (!Array.isArray(arry)) {
    return [];
  }
  return arry.map((student) => student.id);
}
