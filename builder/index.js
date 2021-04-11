const inquirer = require('inquirer');
const fs = require('fs');
const text = require('./text');
//const validator = require("email-validator");
//Gave up on email validation



function init() {
    const managerInfo =[];
    const engineerInfo =[];
    const internInfo =[];

    const managerPrompt = ()=>{
        inquirer.prompt([
            {
             type: "input",
             name: "manager",
             message: "Please enter your team manager's name"  
            },
        ]).then((data) => {
            const managerName = JSON.stringify(data.manager);
            if(data.Manager === ''){
            console.log("Manager name cannot be blank");
            manager();
            }
            else{
                inquirer.prompt([
                    {
                        type: "input",
                        name: "managerID",
                        message: "Enter the manager's employee ID",
                    },
                    {
                     type: "input",
                     name: "managerEmail",
                     message:"Enter the manager's email address.",  
                    },
                    {
                        type: "input",
                        name: "managerOffice",
                        message: "What is the manager's office number?",
                    },
    
                ]).then((answers)=>{
                    var newManager = {
                        name: managerName,
                        id: JSON.stringify(answers.managerID),
                        email: JSON.stringify(answers.managerEmail),
                        office: JSON.stringify(answers.managerOffice),
                    }
                    managerInfo.push(newManager);
                    //take console log out later
                    for (let i =0 ; i< managerInfo.length; i++){
                    console.log("Manager info: " + managerInfo[i].name, managerInfo[i].id, managerInfo[i].email , managerInfo[i].office);
                    }
                }).then(()=>{
                    employeePrompt(); 
                });  
            }
    });  
    };
     
    const employeePrompt= () => {
        inquirer.prompt([
            {
                type:"confirm",
                name:"add_member",
                message:"Would you like to add a Team Member?"
    
            }
        ]).then((data)=>{
            if(data.add_member === false){
                const body = text.text(managerInfo, engineerInfo , internInfo);
                const filename = "index.html";
                fs.writeFile(filename, body, function (err) {
                    if (err){
                        console.log("Error: "+ err + "\n**********");
                    }});
                return;
            }
            else{
                inquirer.prompt([
                    {
                        type:"list",
                        name:"employee_title",
                        message: "What is your team member's title?",
                        choices: ["Engineer", "Intern"],
                    },
                ]).then((answer)=>{
                        if(answer.employee_title === "Engineer"){
                            engineerPrompt();
                        }
                        else{
                            internPrompt();
                        }
                })
            }
        });
    };
    
    const engineerPrompt = () =>{
        inquirer.prompt([
            {
             type: "input",
             name: "engineer",
             message: "Please enter engineer's name"  
            },
        ]).then((data) => {
            const engineerName = JSON.stringify(data.engineer);
            if(data.engineer === ''){
            console.log("Engineer name cannot be blank");
            engineerPrompt();
            }
            else{
                inquirer.prompt([
                    {
                        type: "input",
                        name: "engineerID",
                        message: "Enter the engineer's employee ID",
                    },
                    {
                     type: "input",
                     name: "engineerEmail",
                     message:"Enter the engineer's email address.",  
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's GitHub username?",
                    },
    
                ]).then((answers)=>{
                    let newEngineer = {
                        name: engineerName,
                        id: JSON.stringify(answers.engineerID),
                        email: JSON.stringify(answers.engineerEmail),
                        username: JSON.stringify(answers.github),
                    }
                    engineerInfo.push(newEngineer);
                    //take console log out later
                    for (let i =0 ; i< engineerInfo.length; i++){
                        console.log("Engineer info: " + engineerInfo[i].name, engineerInfo[i].id, engineerInfo[i].email , engineerInfo[i].username);
                        }
                }).then(()=>{
                    employeePrompt();
                });   
            }   
    });
    };
    
    const internPrompt = () =>{
        inquirer.prompt([
            {
             type: "input",
             name: "intern",
             message: "Please enter intern's name"  
            },
        ]).then((data) => {
            const internName = JSON.stringify(data.intern);
            if(data.intern === ''){
            console.log("Intern name cannot be blank");
            internPrompt();
            }
            else{
                inquirer.prompt([
                    {
                        type: "input",
                        name: "internID",
                        message: "Enter the intern's ID.",
                    },
                    {
                     type: "input",
                     name: "internEmail",
                     message:"Enter the intern's email address.",   
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "Enter the intern's School.",
                    },
    
                ]).then((answers)=>{
                    let newIntern = {
                        name: internName,
                        id: JSON.stringify(answers.internID),
                        email: JSON.stringify(answers.internEmail),
                        school: JSON.stringify(answers.school),
                    }
                    internInfo.push(newIntern);
                    //take console log out later
                    for (let i =0 ; i< internInfo.length; i++){
                        console.log("Intern info: " + internInfo[i].name, internInfo[i].id, internInfo[i].email , internInfo[i].school);
                        }
                }).then(()=>{
                    employeePrompt();
                })   
            }   
    });
    };

    managerPrompt()
   
}
init();
