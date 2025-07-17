// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
  constructor(productID, name, price) {
    if (
      typeof productID !== "number" ||
      typeof name !== "string" ||
      typeof price !== "number"
    ) {
      throw new Error("Invalid types for productID, name or price");
    }
    this.productID = productID;
    this.name = name;
    this.price = price;
  }

  totalPrice(quantity) {
    if (typeof quantity !== "number" || quantity <= 0) {
      throw new Error("Quantity must be a positive number");
    }
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productID, name, price, warrantyPeriod) {
    if (typeof warrantyPeriod !== "number" || warrantyPeriod < 0) {
      throw new Error("Warranty period must be a positive number");
    }
    super(productID, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  totalPrice(quantity) {
    const baseTotal = super.totalPrice(quantity);
    return baseTotal + this.warrantyPeriod * 10;
  }
}

const product = new PersonalCareProduct(101, "perfume", 5, 7);
console.log("Total Price:", product.totalPrice(3));
