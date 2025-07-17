// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
  constructor(university_name) {
    this.university_name = university_name;
    this.departments = [];
  }

  add_department(dept) {
    if (!this.departments.includes(dept)) {
      this.departments.push(dept);
    } else {
      console.warn(`Department already Exist '${dept}'`);
    }
  }

  remove_department(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`'${department}' removed from ${this.university_name}.`);
    } else {
      console.log(`Department '${department}' not found.`);
    }
  }

  display_departments() {
    console.log(`Departments in ${this.university_name}:`);
    this.departments.forEach((department) => console.log(department));
  }
}
const myUniversity = new University("My University");
myUniversity.add_department("Computer Science");
myUniversity.add_department("Mathematics");
myUniversity.add_department("Physics");

myUniversity.remove_department("Physics");

myUniversity.display_departments();
