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

module.exports = Employee;

// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`  