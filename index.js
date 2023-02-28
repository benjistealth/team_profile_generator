const Manager = require("./assets/lib/Manager");
const Engineer = require("./assets/lib/Engineer");
const Intern = require("./assets/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./assets/src/page-template");

const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    //managerquestions
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Managers ID?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers office number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Managers email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the Managers Github Username?',
    },
]).then(response => {
    // populate manager info
    team.push(new Manager(response.name, response.id, response.officeNumber, response.email, response.github));
    promptForNextEmployee();
})

const promptForNextEmployee = () => {
    inquirer.prompt([
        {  // choice of 3
            type: 'list',
            name: 'nextEmployee',
            message: 'Choose a Team member to add from the list below, or generate Team html page.`(use arrow keys to navigate)`',
            choices: [
                'Engineer',
                'Intern',
                'No more Team members to add. Generate Team Page',
            ]
        }
    ]).then(response => {
        console.log(response);
        if (response.nextEmployee === "Engineer") { promptForEngineer() }
        else if (response.nextEmployee === "Intern") { promptForIntern() }
        //    use the functionality from page-template to generate the team
        else if (response === "No more Team members to add. Generate Team Page") { generateTeam(team) }
    })
}

const promptForEngineer = () => {
    inquirer.prompt([
        //engineer questions
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers Github Username?',
        },
    ]).then(response => {
        // add new engineer to employees array
        team.push(new Engineer(response.name, response.id, response.email, response.github));
        // promptForNextEmployee
        promptForNextEmployee();
    })
}

const promptForIntern = () => {
    inquirer.prompt([
        //intern questions
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Interns ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the Interns school?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Interns Github Username?',
        },
    ]).then(response => {
        // add new intern to employees array
        team.push(new Intern(response.name, response.id, response.email, response.github));
        // promptForNextEmployee
        promptForNextEmployee();
    })
}

