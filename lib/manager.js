
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email, officeNumber) {
        super(name, id, email)
        this.officeNumber = 200
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
};

module.exports = Manager;