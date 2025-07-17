// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(bank_name) {
    this.bank_name = bank_name.trim();
    this.branches = [];
  }

  add_branch(branch) {
    if (typeof branch !== "string" || !branch.trim()) {
      console.log("Invalid branch name.");
      return;
    }

    if (this.branches.includes(branch)) {
      console.log("Branch already exists.");
      return;
    }

    this.branches.push(branch);
  }

  remove_branch(branch) {
    if (typeof branch !== "string" || !branch.trim()) {
      console.log("Invalid branch name.");
      return;
    }
    branch = branch.trim().toLowerCase();

    const index = this.branches.indexOf(branch);
    if (index !== -1) {
      this.branches.splice(index, 1);
    } else {
      console.log("This branch does not exist.");
    }
  }

  all_branches() {
    if (this.branches.length === 0) {
      console.log("No branches available.");
      return;
    }
    console.log(`Branches of ${this.bank_name}:`);
    this.branches.forEach((branch, i) => {
      console.log(branch);
    });
  }
}

const bank = new Bank("HDFC bank");
bank.add_branch("ahmedabad");
bank.add_branch("bangalore");
bank.add_branch("delhi");
bank.all_branches();
bank.remove_branch("delhi");
bank.all_branches();
