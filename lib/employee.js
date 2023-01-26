const inquirer = require('inquirer')
const { default: Choice } = require('inquirer/lib/objects/choice');


class Employee{
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName(){
        inquirer
        .prompt([
            {
                message: 'Please enter your name.',
                name: 'employee'
            }
        ])
        .then((response) =>{
            this.name = response
            console.log(this.name)
            this.getId()
        })

    }
    getId(){
         inquirer
         .prompt([
            {
                message: 'What is your employee ID?',
                name: 'id'
            }
         ])
         .then((response) =>{
            this.id = response
            console.log(this.id)
            this.getEmail()
        })
    }
    getEmail(){
        inquirer
         .prompt([
            {
                message: 'What is your employee email?',
                name: 'email'
            }
         ])
         .then((response) =>{
            this.email = response
            console.log(this.email)
            this.getRole()
        })
    }
    getRole(){
        inquirer
         .prompt([
            {
                type: 'list',
                message: 'What is your role?',
                name: 'role',
                choices: ['manager', 'engineer', 'intern']
            }
         ])
         .then((response) => {
            console.log(response.role)
            if(response.role === 'manager'){
              Manager.getRole()
                response.name = new Manager(resonse.name, response.id, response.email, officeNumber)
                console.log(response.name)
            }
         })
    }

}
const newEmployee = new Employee()
newEmployee.getName()
module.exports = Employee;