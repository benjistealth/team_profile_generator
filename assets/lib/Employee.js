// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
        // this.getName = function () { return this.name; };
        // this.getId = function () { return this.id; };
        // this.getEmail = function () { return this.email; };
        // this.getRole = function () { return "Employee"; };
    }
}

Employee.prototype.getName = function() {
    name = this.name;
  };
  Employee.prototype.getId = function() {
    id = this.id;
  };
Employee.prototype.getEmail = function() {
    email = this.email;
  };
  Employee.prototype.getRole = function() {
    role = this.role;
  };
  Employee.prototype.getGithub = function() {
    github = this.github;
  };

  

module.exports = Employee;


