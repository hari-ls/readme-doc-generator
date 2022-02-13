// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  // Project Title (input)
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  // Description (editor)
  {
    type: "editor",
    name: "description",
    message: "Provide a short description explaining the project:",
  },
  // Installation Instructions (editor)
  {
    type: "editor",
    name: "installation",
    message: "Installation instructions:",
  },
  // Usage Information (editor)
  {
    type: "editor",
    name: "usage",
    message: "Usage information:",
  },
  // Contribution (editor)
  {
    type: "editor",
    name: "contributing",
    message: "Contribution guidelines:",
  },
  // Test Instructions (editor)
  {
    type: "editor",
    name: "tests",
    message: "Test instructions:",
  },
  // Choose License (list)
  {
    type: "list",
    name: "license",
    message: "Select license type:",
    choices: [
      "Apache license 2.0",
      "GNU General Public License v3.0",
      "MIT",
      "Open Software License 3.0",
      "The Unlicense",
    ],
  },
  // GitHub Username (input)
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
  },
  // Email Address (input)
  {
    type: "input",
    name: "emal",
    message: "Enter your Email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName, data);
  console.log(generateMarkdown(data));
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
