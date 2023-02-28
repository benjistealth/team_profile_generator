// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.id = id;
        this.getName = function () { return this.name; };
        this.getId = function () { return this.id; };
        this.getEmail = function () { return this.email; };
        this.getRole = function () { return "Employee"; };
    }
}

Employee.prototype.getEmail = function() {
    email = this.email;
  };
  Employee.prototype.getName = function() {
    name = this.name;
  };
  Employee.prototype.getId = function() {
    id = this.id;
  };
  Employee.prototype.getRole = function() {
    role = this.role;
  };
  

module.exports = Employee;


