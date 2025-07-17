// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, publication_year) {
    this.title = title;
    this.author = author;
    this.publication_year = publication_year;
  }

  book_details() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publication_year}`);
  }
}

class Ebook extends Book {
  constructor(title, author, publication_year, book_price) {
    super(title, author, publication_year);

    this.book_price = book_price;
  }

  book_details() {
    super.book_details();
    console.log(`Price: Rs.${this.book_price}`);
  }
}

const myEbook = new Ebook("The JavaScript Course", "John Do", 2025, 250);
myEbook.book_details();
