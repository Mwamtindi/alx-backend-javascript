// task_4/js/subjects/Teacher.ts
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number; // Optional attribute for experience in teaching C
    experienceTeachingReact?: number; // Optional attribute for experience in teaching React
    experienceTeachingJava?: number; // Optional attribute for experience in teaching Java
  }
}
