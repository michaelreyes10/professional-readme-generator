const fs = require('fs');
const inquirer = require('inquirer')
const path = require('path')
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your project? ',
    
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ['MIT', 'Apache', 'Private'],
    
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installations of your project? ',
    
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'What are the instructions of your project?',
    
  },
  {
    type: 'input',
    name: 'usage_info',
    message: 'What is the usage info of your project? ',
    
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contributions of your project? ',
    
  },
  {
    type: 'input',
    name: 'test_instructions',
    message: 'List the test instructions of your project?',
    
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List the credits of your project?',
    
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?',
    
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    
  },
];

const renderbadges = (license) => {
  if (license === 'MIT'){
    return '[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache'){
    return '[![Apache](https://img.shields.io/badge/license-Apache-green)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'Private'){
    return 'Private License'
  }
}

inquirer.prompt(questions).then((data) => {

  const {title, description, license, instructions, usage_info,contribution,email,github, test_instructions,credits, installation } = data;
    


const readme =
`
# ${title}
${renderbadges(license)}
 ## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Instructions](#instructions)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Credits](#credits)
* [License](#license)
* [Github](#github)
* [Email](#email)
    


## Description

   ${description}

## License

    ${license}

## Installation

    ${installation}    

## Instructions

    ${instructions}
    
## Usage
    
    ${usage_info}

## Contribution

    ${contribution}

## Test

    ${test_instructions}

## Credits

    ${credits}

## Github

    [${github}](https://github.com/${github})

## Email

    ${email}
    ----
`;

fs.writeFileSync(path.join(__dirname,'/examples/','README.md'), readme, (error) => 
  console.log(error ? 'error in your file' : 'success')
);

});


 


