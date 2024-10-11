// task_4/js/subjects/Subject.ts
namespace Subjects {
  export class Subject {
    protected teacher: Teacher;

    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
