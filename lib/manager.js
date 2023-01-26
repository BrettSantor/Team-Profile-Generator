const { default: inquirer } = require('inquirer')
const Employee = require('../lib/employee')

class Manager extends Employee{
    constructor(officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        inquirer
        .prompt([{
            message: 'What is your office number?',
            name: 'officeNumber'
        }])
        .then((response) =>{
            response.officeNumber
        })
    }
}
module.exports = Manager