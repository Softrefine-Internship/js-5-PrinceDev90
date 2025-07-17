// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  #AC_NUMBER;
  #BALANCE;

  constructor(AC_NUMBER, BALANCE) {
    this.#AC_NUMBER = AC_NUMBER;
    this.#BALANCE = BALANCE;
  }

  deposit(amount) {
    if (amount <= 0 || typeof amount !== "number") {
      console.log("Deposit amount must be a positive number");
    } else {
      this.#BALANCE += amount;
      console.log("Deposited: " + amount + ", New Balance: " + this.#BALANCE);
      console.log(`Account No : ${this.#AC_NUMBER}`);
    }
  }

  withdraw(amount) {
    if (amount <= 0 || typeof amount !== "number") {
      console.log("Withdrawal amount must be a positive number");
    } else if (amount > this.#BALANCE) {
      console.log("Insufficient balance");
    } else {
      this.#BALANCE -= amount;
      console.log(
        "Withdrawn: " + amount + ", Remaining Balance: " + this.#BALANCE
      );
      console.log(`Account No : ${this.#AC_NUMBER}`);
    }
  }

  checkBalance() {
    if (!this.#AC_NUMBER || !this.#BALANCE) {
      return console.log("Please Create New Account. Not Found!!!!");
    } else {
      console.log(`Available balance : Rs ${this.#BALANCE}`);
    }
  }

  getAccountNumber() {
    return this.#AC_NUMBER;
  }

  getBalance() {
    return this.#BALANCE;
  }
}

const account1 = new BankAccount(123456789, 1000);
account1.deposit(200);
account1.withdraw(100);
account1.checkBalance();
account1.getAccountNumber();
account1.getBalance();
