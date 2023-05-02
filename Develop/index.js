// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeToFile");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "dependencies",
    message: "What packages does your project require? (comma-separated list)",
    filter: function (value) {
      // Parse the comma-separated list of dependencies into an array
      return value.split(",").map((item) => item.trim());
    },
  },

  {
    type: "input",
    name: "installation",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you test your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project have?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];
// TODO: Create a function to write README file
// function writeToFile(, data) {}
writeToFile("README.md", readmeData);

// TODO: Create a function to initialize app
// function init() {}
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README file content based on the user's answers
      const readmeData = generateMarkdown(answers);

      // Write the README file to disk
      writeToFile("README.md", readmeData);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
