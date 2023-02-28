// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.getGithub = function() {return this.github};
        this.getRole = function() {return "Engineer";};
        // getEmail = function() {return this.email};
        // and other properties
    };
}

const eng1 = new Engineer("Danish", "danish@gmail.gov", "danisheng");

module.exports = Engineer;
