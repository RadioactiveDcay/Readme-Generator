//node modules 
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

//inquirer to genarate questions
inquirer.prompt(
    [
        
           {type: 'input',
            message:"Project name?",
            name:'title',
            //validate property to check user input
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },

            {type: 'input',
            message:"Which directory is it located under?",
            name:'installation',
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },
            
            {type: 'input',
            message:"Please provide instructions...",
            name:'usage',
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },

            {type: 'input',
            message:"Any security permissions?",
            name:'installation',
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },

            {type: 'list',
            message:"License's?",
            name:'license',
            choices: ['GNU AGPLv3','GNU LGPL','BSD','ECL-2.0','GPL License','Apache License','GNU License','Other','N/A'],
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },

            {
                type: 'input',
                message:"GitHub Username:",
                name:'git',
                validate: (value)=>{ 
                    if(value){return true}
                    else {return 'I need an input to continue'}}
            },

            {
                type: 'input',
                message: "E-mail:",
                name: 'email',
                validate: (value)=>{ 
                    if(value){return true}
                    else {return 'I need an input to continue'}}
            }
    ]
).then((
    title,
    installation,
    instruction,
    credit,
    license,
    git,
    linkedIn,
    email,
    usage,
    contribution,
)=>{
//template to be used
const template = 
}
)