const inquirer = require('inquirer');
const fs = require('fs'); 
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, "output")

const render = ('./lib/htmlRenderer');

const arrayEmployees =[];



function employeeInfo() {
    console.log("Welcome, let's begin building your team!");
    inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'What is the role of your team member?',
        choices: ['Manager', 'Engineer', 'Intern', 'Finished/Save']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        when: function(response) {
            return(response.role !== 'Finished/Save')}

      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employees id number?',
        when: function(response) {
            return(response.role !== 'Finished/Save')}
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employees email?',
        when: function(response) {
            return(response.role !== 'Finished/Save')}
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your Managers office number.',
        when: function(response) {
            return(response.role === 'Manager')}
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Enginners GitHub username.',
        when: function(response) {
            return(response.role === 'Engineer')}
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter your Interns school.',
        when: function(response) {
            return(response.role === 'Intern')}
      },
    ])
    .then(function (response) {
        if(response.role === "Manager") {
           
         const manager = new Manager(response.name, response.id, response.email, response.officeNumber); 
         arrayEmployees.push(manager); 
         
         employeeInfo();

        } else if (response.role === "Engineer") {
            const engineer = new Engineer(response.name, response.id, response.email, response.github); 
            arrayEmployees.push(engineer); 
           
            employeeInfo();

        } else if (response.role === "Intern") {
           const intern = new Intern(response.name, response.id, response.email, response.school); 
            arrayEmployees.push(intern); 
            
            employeeInfo();
            
        } else {
           console.log("Saving data...")
           
           createHTML(); 
            }
       }); 
  };

employeeInfo();


