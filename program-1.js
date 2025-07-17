// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
  constructor(name = "Unknow", age = 0, country = "---") {
    if (typeof name !== "string" || !name.trim()) {
      console.log("Invalid name. It must be a non-empty string.");
      return;
    }
    if (typeof age !== "number" || age < 0) {
      console.log("Invalid age");
      return;
    }
    if (typeof country !== "string" || !country.trim()) {
      console.log("Invalid country. It must be a non-empty string.");
      return;
    }
    this.name = name;
    this.age = age;
    this.country = country;
  }

  person_details() {
    console.log(`${this.name} : ${this.age} : ${this.country}`);
  }
}

const p1 = new Person("Prince", 23, "India");
const p2 = new Person("Darshab", 78, "USA");
const p3 = new Person();

p1.person_details();
p2.person_details();
p3.person_details();
