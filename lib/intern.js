const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(school){
    super(name, id, email)
    this.school = school
}
    getSchool(){}
    getRole(){}

}
let pete = new Intern('berkley')
console.log(pete)
module.exports = Intern
