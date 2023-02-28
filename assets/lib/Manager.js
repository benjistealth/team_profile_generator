// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, github) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.github = github;
        // getName = function () { return this.name; }
        this.getRole = function () { return "Manager"; }
        // getEmail = function () { return this.email; }
        this.getGithub = function () { return this.github; };
        this.getOfficeNumber = function () { return this.officeNumber; }
        // most of these can be added as prototype functions of Employee
    };
    // and other properties
}


const mgr1 = new Manager("Danish", "danish@gmail.gov", "danisheng");

module.exports = Manager;
