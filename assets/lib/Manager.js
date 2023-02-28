// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, github) {
        super(name, email, "Manager");
        this.github = github;
        // and other properties
    }
}

const mgr1 = new Manager("Danish", "danish@gmail.gov", "danisheng");

module.exports = Manager;

// * When a user starts the application then they are prompted to enter the **team manager**’s:
// * Name
// * Employee ID
// * Email address
// * Office number
// * When a user enters those requirements then the user is presented with a menu with the option to:
// * Add an engineer
// * Add an intern 
// * Finish building the team

// * In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`