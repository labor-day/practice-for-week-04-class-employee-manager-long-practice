const Employee = require('./employee');

class Manager extends Employee {

  constructor(name, salary, title, manager) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  sumEmployees() {
    let total = 0;
    this.employees.forEach(

      employee => {
        total += employee.salary;
        if (employee instanceof Manager) {
          total += employee.sumEmployees();
        }
      }
    );

    return total;
  }

  calculateBonus(multiplier) {
    return (this.sumEmployees() + this.salary) * multiplier

  }

}

let Hobbes = new Manager("Hobbes", 1000000, "Founder");
let Calvin = new Manager("Calvin", 130000, "Director", Hobbes);
let Susie = new Manager("Susie", 100000, "TA Manager", Calvin);
let Lily = new Employee("Lily", 90000, "TA", Susie);
let Clifford = new Employee("Clifford", 90000, "TA", Susie);

let mikey = new Employee('Michelangelo', 85000, 'Grasshopper');
console.log(mikey.calculateBonus(0.05));
