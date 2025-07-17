// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display_info() {
    console.log(`${this.make} - ${this.model} - ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, numberOfDoor) {
    super(make, model, year);
    this.numberOfDoor = numberOfDoor;
  }

  display_info() {
    console.log(
      `Name: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors:${this.numberOfDoor}`
    );
  }
}

const car1 = new Car("BMW", "M5", 2021, 4);
car1.display_info();
