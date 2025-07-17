//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calc_area() {
    console.log(`Area : ${this.width * this.height}`);
  }

  calc_perimeter() {
    console.log(`perimeter : ${2 * (this.width + this.height)}`);
  }
}

const obj1 = new Rectangle(10,5);
obj1.calc_area();
obj1.calc_perimeter();
