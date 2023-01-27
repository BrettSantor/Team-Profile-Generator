const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let team = [];



function managerInfo(){
inquirer
.prompt([
    {
    message: 'What is your name?',
    name: 'name'
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
])
.then((response) =>{
    
    //build new class manager
  const manager = new Manager(response.name, response.memberId, response.email, response.office)
    //function to choose new team member
    team.push(manager)
    console.log(team)
    otherMember()

}
)}

function otherMember(){
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'choose another member?',
            choices: ['engineer', 'intern', 'I am done building'],
            name: 'teamMember'

        }
    ])
    .then((response) =>{
if(response.teamMember === 'I am done building'){
    //generate html
    generatePage();
} else if(response.teamMember === 'engineer'){
    //call engineer function
    engineerInfo();
} else {
    //call intern function
    internInfo();
}
    })
}
function engineerInfo(){
    inquirer
    .prompt([
     {
        message: 'What is your engineers name?',
        name: 'name'
     },
     
     {
        message: 'What is their ID?',
        name: 'id'
     },
     {
        message: 'What is their email?',
        name: 'email'
     },
     {
        message: 'What is their github username?',
        name: 'github'
     },

    ])
    .then((response) => {
       const engineer = new Engineer(response.name,response.id,response.email,response.github);
        team.push(engineer);
        console.log(team)
        otherMember();
    })
};

function internInfo(){
    inquirer
    .prompt([
     {
        message: 'What is your interns name?',
        name: 'name'
     },
     
     {
        message: 'What is their ID?',
        name: 'id'
     },
     {
        message: 'What is their email?',
        name: 'email'
     },
     {
        message: 'What is the name of their school?',
        name: 'school'
     },

    ])
    .then((response) => {
       const intern = new Intern(response.name,response.id,response.email,response.school);
        team.push(intern);
        console.log(team)
        otherMember();
    })
};

function generatePage(){
    
    fs.writeFileSync('index.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <title> Team Page</title>
    </head>
    <body>
        <h1>Meet The Team</h1>
        <section class="teamCard">
        `, (err) => {
        if (err)
          console.log(err)})

    team.forEach(el => {
//        fs.appendFileSync('index.html', `<div class="card">
//        <h2 class="card header">${el.getName()}</h2>
//        <h4 class="card role">${el.getRole()}</h4>
//        <p class="id">ID number: ${el.id}</p>
//        <div class="email">Email: ${el.email}</div>
// </div>`, (err) => {
//     if (err)
//       console.log(err)})
    if(el.officeNumber){
        fs.appendFileSync('index.html', `<div class="card">
        <h2 class="card-header">${el.getName()}</h2>
        <h4 class="card-role">${el.getRole()}</h4>
        <p class="id">ID number: ${el.id}</p>
        <p class="email">Email: <a href="mailto:${el.email}">${el.email}</a></p>
 <p>office number: ${el.officeNumber}<p></div>`, (err) => {
            if (err)
              console.log(err)})
    }else if (el.github){
        fs.appendFileSync('index.html', `<div class="card">
        <h2 class="card-header">${el.getName()}</h2>
        <h4 class="card-role">${el.getRole()}</h4>
        <p class="id">ID number: ${el.id}</p>
        <p class="email">Email: <a href="mailto:${el.email}">${el.email}</a></p>
 <a href="https://www.github.com/${el.getGithub()}/" target="_blank">${el.github}</a></div>`, (err) => {
            if (err)
              console.log(err)})
    } else if (el.school) {
        fs.appendFileSync('index.html', `<div class="card">
        <h2 class="card-header">${el.getName()}</h2>
        <h4 class="card-role">${el.getRole()}</h4>
        <p class="id">ID number: ${el.id}</p>
        <p class="email">Email: <a href="mailto:${el.email}">${el.email}</a></p>
        <p>${el.getSchool()}</p></div>`, (err) => {
            if (err)
              console.log(err)})
    };
        
    })
    fs.appendFile('index.html', `</section>
    </body>
    </html>`, (err) => {
        if (err)
        console.log(err)
    })

};

managerInfo();