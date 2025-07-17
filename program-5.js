// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

"use strict";
class Shape {
  constructor() {
    this.pi = Math.PI;
  }

  area() {
    return 0;
  }
}

class Circle extends Shape {
  area(r) {
    if (typeof r !== "number" || r <= 0) {
      return console.error("Radius must be a positive number");
    }
    return r * r * this.pi;
  }
}

class Triangle extends Shape {
  area(height, base) {
    if (
      typeof height !== "number" ||
      height <= 0 ||
      typeof base !== "number" ||
      base <= 0
    ) {
      return console.log("Height and base must be positive numbers");
    }
    return 0.5 * base * height;
  }
}

const circle = new Circle();
console.log("Circle Area :", circle.area(2).toFixed(3));

const triangle = new Triangle();
console.log("triangle Area :", triangle.area(5, 6));
