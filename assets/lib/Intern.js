// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, github) {
        super(name, id, email, "Intern");
        this.github = github;
        this.school = school;
        this.getRole = function () { return "Intern" };
        this.getSchool = function () { return this.school };
        // and other properties
    }
}

const intn1 = new Intern("Danish", "danish@gmail.gov", "danisheng");

module.exports = Intern;
