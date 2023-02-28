// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, github) {
        super(name, id, email, "Manager", github);
        this.officeNumber = officeNumber;
        this.github = github;
        this.getOfficeNumber = function () { return this.officeNumber; }
    };
}

module.exports = Manager;
