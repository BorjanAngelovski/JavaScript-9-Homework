class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate the Shape class directly.");
    }
  }

  calculateArea() {
    throw new Error("Method 'calculateArea' must be implemented in subclass");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

const circle = new Circle(5);
console.log(`Circle area: ${circle.calculateArea().toFixed(2)}`);

const triangle = new Triangle(6, 8);
console.log(`Triangle area: ${triangle.calculateArea().toFixed(2)}`);






class Bank {
    constructor(bankName) {
      this.bankName = bankName; 
      this.branches = [];         
    }
  

    addBranch(branchName) {
      if (this.branches.includes(branchName)) {
        console.log(`Branch '${branchName}' already exists.`);
      } else {
        this.branches.push(branchName);
        console.log(`Branch '${branchName}' added to ${this.bankName}.`);
      }
    }
  

    removeBranch(branchName) {
      const branchIndex = this.branches.indexOf(branchName);
      if (branchIndex !== -1) {
        this.branches.splice(branchIndex, 1);
        console.log(`Branch '${branchName}' removed from ${this.bankName}.`);
      } else {
        console.log(`Branch '${branchName}' does not exist in ${this.bankName}.`);
      }
    }
  

    displayBranches() {
      if (this.branches.length > 0) {
        console.log(`Branches of ${this.bankName}:`);
        this.branches.forEach((branch, index) => {
          console.log(`${index + 1}. ${branch}`);
        });
      } else {
        console.log(`No branches found for ${this.bankName}.`);
      }
    }
  }
  

  const myBank = new Bank("Global Bank");
  

  myBank.addBranch("Downtown");
  myBank.addBranch("Uptown");
  myBank.addBranch("Airport");
  

  myBank.displayBranches();
  

  myBank.addBranch("Downtown");

  myBank.removeBranch("Uptown");
  

  myBank.displayBranches();
  

  myBank.removeBranch("Suburban");
  

  myBank.displayBranches();
  


class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  

    calculateAnnualSalary() {
      return this.salary * 12; 
    }
  }
  

  class Manager extends Employee {
    constructor(name, salary, department, bonusPercentage) {
      super(name, salary);  
      this.department = department;  
      this.bonusPercentage = bonusPercentage || 0; 
    }
  
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary();  
      const bonus = baseSalary * (this.bonusPercentage / 100);
      return baseSalary + bonus;  
    }
  }
  
 
  const manager1 = new Manager("Robert", 5000, "IT", 10);  
  const manager2 = new Manager("Tanja", 6000, "HR", 15);  
  

  console.log(`${manager1.name}'s annual salary: $${manager1.calculateAnnualSalary().toFixed(2)}`);
  console.log(`${manager2.name}'s annual salary: $${manager2.calculateAnnualSalary().toFixed(2)}`);
  