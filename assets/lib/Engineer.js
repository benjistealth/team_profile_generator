// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email, "Engineer");
        this.github = github;
        // and other properties
    }
}

const eng1 = new Engineer("Danish", "danish@gmail.gov", "danisheng");

module.exports = Engineer;



// * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
// * Engineer's Name
// * ID
// * Email
// * GitHub username
// * In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`