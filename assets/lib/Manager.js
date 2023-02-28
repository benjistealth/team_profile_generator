// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, github) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
        this.github = github;
        this.getRole = function () { return "Manager"; }
        this.getOfficeNumber = function () { return this.officeNumber; }
    };
    // and other properties
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