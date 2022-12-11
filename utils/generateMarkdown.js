// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string License can be found in git hub
function renderLicenseBadge(license) {
    if (license) {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)]`;
        // [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]
    } else {
        return ''
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string //
// linking to the license section in the readme if there is one
function renderLicenseLink(license) {
    if (license) {
        return '(https://img.shields.io/badge/license-blue.svg)'
    } else {
        return ''
    }



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
     if (license) {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)]`;
    // [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]
} else {
    return ''
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data)
    return `
  # ${data.title}
 

  # table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ##description:
    ${data.description}

    ##installation:
    ${data.installation}

    ##usage:
    ${data.usage}

    ##license:
    ${data.license}

    ##contribution:
    ${data.contributions}

    ##test:
    ${data.test}

    ##github/email:  
    ${data.questions}
  
    


 
`;
}


module.exports = generateMarkdown;
