// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

"use strict";
class BankAccount {
  #BALANCE;

  constructor(accountNumber, accountHolder, balance) {
    if (
      typeof accountNumber !== "number" ||
      typeof accountHolder !== "string" ||
      typeof balance !== "number"
    ) {
      throw new Error(
        "Invalid types for accountNumber, accountHolder, or balance"
      );
    }
    this._accountNumber = accountNumber;
    this._accountHolder = accountHolder;
    this.#BALANCE = balance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }
    this.#BALANCE += amount;
    console.log(
      `Deposited ${amount} into ${
        this._accountHolder
      }'s account. New balance: ${this.#BALANCE}`
    );
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0 || amount > this.#BALANCE) {
      throw new Error("Invalid withdrawal amount");
    }
    this.#BALANCE -= amount;
    console.log(
      `Withdrawn ${amount} from ${
        this._accountHolder
      }'s account. New balance: ${this.#BALANCE}`
    );
  }

  transfer(amount, recipientAccount) {
    if (typeof amount !== "number" || amount <= 0 || amount > this.#BALANCE) {
      throw new Error("Invalid transfer amount");
    }
    if (!(recipientAccount instanceof BankAccount)) {
      throw new Error("Recipient must be a valid BankAccount instance");
    }
    this.withdraw(amount);
    recipientAccount.deposit(amount);
    console.log(
      `Transferred ${amount} from ${this._accountHolder} to ${recipientAccount._accountHolder}.`
    );
  }

  getBalance() {
    return this.#BALANCE;
  }
}

const account1 = new BankAccount(101, "Prince", 50000);
const account2 = new BankAccount(102, "Darshan", 30000);

account1.deposit(500);
account1.withdraw(300);
account1.transfer(200, account2);

console.log(
  `${account1._accountHolder}'s final balance: ${account1.getBalance()}`
);
console.log(
  `${account2._accountHolder}'s final balance: ${account2.getBalance()}`
);
