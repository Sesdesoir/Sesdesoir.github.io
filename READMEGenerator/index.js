// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Describe your project:", "What is your Github username?", "What is your email?", "Would you like a table of contents?", "What are your installation instructions?", "Explain how to use this project:", "List your Credits and special mentions here:", "Is there any other information you would like added to your questions section?"];
                //        0                                      1                                  2                          3                            4                                              5                                   6                                         7                                                          8                                                                                                                                                                                                                               
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const title = `# ${data.Project}    ${markdown.renderLicenseBadge(data.Liscense)}\n`;
        const description = `## Description \n ${data.Description} \n`;
        var tableOcontents; 
        if(data.TableOfContents == true){
            tableOcontents = 
            `## Table Of Contents
            [Installation](#Installation)
            [Useage](#Useage)
            [Credits](#Credits)
            [Questions](#Questions)
            [License](#License)  
            `;
        }
        else{
            tableOcontents = '';
        }
        const install = `## Installation \n ${data.Installation}\n`; 
        const useage = `## Useage \n ${data.Useage}\n`;
        const creds = `## Credits \n ${data.Credits}\n`;
        const questions = `## Questions \n Github Username: ${data.Username}   Link: https://github.com/${data.Username} \n Email: ${data.Email}\n${data.Questions}\n`;
        const liscense = `## License\n ${data.Liscense}\n ${markdown.renderLicenseLink(data.Liscense)}\n`;
        const espace = " \n";

        const text = title + espace + description + espace+ tableOcontents + espace + install + espace + useage + espace + creds + espace + questions + espace + liscense;
        fs.writeFile(fileName, text , (err) =>
          err ? console.log(err) : console.log('READEME.md Created!')
        );
      }
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
         type: "input",
         name: "Project",
         message: questions[0]  },
         
         {
          type: "input",
          name: "Description",
          message: questions[1]
         },
   
         {
           type: "input",
           name: "Username",
           message: questions[2]
          },
   
          {
           type:"input",
           name: "Email",
           message: questions[3]
          },

          {
           type: "confirm",
           name: "TableOfContents",
           message: questions[4]   
          },

          {
           type: "input",
           name: "Installation",
           message: questions[5]
          },

          {
           type: "input",
           name:"Useage",
           message: questions[6]   
          },

          {
           type:"input",
           name: "Credits",
           message: questions[7]   
          },

          {
           type: "input",
           name: 'Questions',
           message: questions[8]  
          },

          {
           type:"list" ,
           name:"Liscense",
           message: "Which license do you have?",
           choices:["GNU AGPLv3","GNU GPLv3", "GNU LGPLv3","Mozilla Public License 2.0", "Apache License 2.0","MIT License","Boost Software License 1.0", "The Unlicense", "None"]
          }

    ])
    .then((data) => {
        const filename = "READMEtest.md"; 
        writeToFile(filename, data);
});} 


// Function call to initialize app
init();
