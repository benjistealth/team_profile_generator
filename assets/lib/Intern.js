// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, github) {
        super(name, email, "Intern");
        this.github = github;
        // and other properties
    }
}

const intn1 = new Intern("Danish", "danish@gmail.gov", "danisheng");

module.exports = Intern;

// * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
// * Intern’s name
// * ID
// * Email
// * School
// * In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`