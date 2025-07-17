// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calc_anunual_salary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
    super(name, salary);

    this.department = department;
    this.bonus = bonus;
  }

  calc_anunual_salary() {
    return super.calc_anunual_salary() + this.bonus;
  }

  displayDetails() {
    console.log(
      `Name: ${this.name}, Department: ${
        this.department
      }, Annual Salary: ${this.calc_anunual_salary()}`
    );
  }
}

const manager1 = new Manager("John", 5000, "HR", 10000);
manager1.displayDetails();

const manager2 = new Manager("Bob", 7000, "IT", 15000);
manager2.displayDetails();
