//node modules 
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

//inquirer to genarate questions
inquirer.prompt(
    [
        
           {type: 'input',
            message="Project name?",
            name:'title'
            //validate property to check user input
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },

            {type: 'input',
            message="Which directory is it located under?",
            name:'installation'
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },
            
            {type: 'input',
            message="Please provide instructions...",
            name:'installation'
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },

            {type: 'input',
            message="Any security permissions?",
            name:'installation'
            validate: (value)=>{ 
                if(value){return true}
                else {return 'I need an input to continue'}}
            },

    ]
)