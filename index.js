// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Projects Title?',
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Please provide a table of content for your readme?',
    },

    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project?',
    },



    {
      type: 'input',
      name: 'installation',
      message: 'Please describe the installations proceeded used',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Please give a description of your project would be used for?',
    },

    {
      type: 'list',
      name: 'license',
      message: 'Please choose which licensed were used in this project',
      choices: [
        'IBM',
        'Mozilla',
        'GitHub',
      ]
    },

    {
      type: 'input',
      name: 'contributions',
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
      message:[ 'What is your github profile?',

      
      'What is your email address?', 
  ]},
  
    
  ])

    



// // TODO: Create a function to write README file
function writeToFile(questions, data) {
  fs.writeFile(questions, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log)('Successfully created index.html!')
}




// TODO: Create a function to initialize app
function init() {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};


   


// Function call to initialize app
init();
