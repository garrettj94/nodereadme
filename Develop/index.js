// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input





const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Projects Title?',
      },

      {
        type: 'input',
        name: 'discription',
        message: 'Please give a discription of your project?',
      },

    

      {
        type: 'input',
        name: 'Instalation',
        message: 'Please discribe the instalations proccesed used',
      },

      {
        type: 'input',
        name: 'usage',
        message: 'Please give a discription of your project would be used for?',
      },

      {
        type: 'list',
        name: 'License',
        message: 'Please choose which licensed were used in this project',
        choices:[
            '',
        ]
      },

      {
        type: 'input',
        name: 'controbutions',
        message: 'Please list anyone who might have contributed to this project',
      },

      {
        type: 'input',
        name: 'test',
        message: 'What if any test are included',
      },

      {
        type: 'input',
        name: 'questions',
        message: 'Please send any questions to',
      },
    
    
    
    
    
    
    
    
    
    
    
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
