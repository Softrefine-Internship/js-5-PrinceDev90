// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  animal_sound() {
    console.log(`Species: ${this.species}`);
    console.log(`Sound: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  animal_sound() {
    super.animal_sound();
    console.log(`Color: ${this.color}`);
  }
}

const dog = new Dog("dog", "bhaw bhaw", "black");
dog.animal_sound();
