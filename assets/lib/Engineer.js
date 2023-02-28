// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
        super(name, id, email);
        this.github = github;
        this.getGithub = function() {return this.github};
        this.getRole = function() {return "Engineer";};
        // getEmail = function() {return this.email};
        // and other properties
    };
}

module.exports = Engineer;
