const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choice } = require('inquirer/lib/objects/choice');


function employeeInfo(){
inquirer
.prompt([
    {
    message: 'What is your managers name?',
    name: 'manager'
    },
    {
        message: 'What is your employee ID?',
        name: 'memberId'
    },
    {
        message: 'What is your email address?',
        name: 'email'
    },
    {
        message: 'What is your employee office number?',
        name: 'office'
    },
    {
        type: 'list',
        message: 'Would you like to add a team member?',
        name: 'member',
        choices: ['engineer', 'intern']
    }
])
.then((response) =>{
    const teamData = response
    // console.log(teamData)
 console.log(`this is the manager ${teamData.manager}, the id is ${teamData.memberId}, an email to reach them is ${teamData.email}, ${teamData.office}, ${teamData.member}`)
}
)}
employeeInfo();