import inquirer from "inquirer";

const last = { domain: "www.google.com", rebase: false, files: "*" };

const questions = [
  {
    type: "input",
    name: "files",
    message: "Test file [* = all tests]",
    default: function() {
      return last.files;
    }
  },
  {
    type: "input",
    name: "url",
    message: "Enter the domain URL to test",
    default: function() {
      return last.domain;
    }
  },
  {
    type: "confirm",
    name: "rebase",
    message: "Is this a new baseline?",
    default: function() {
      return last.rebase;
    }
  }
];

export const run = () => {
  return inquirer.prompt(questions);
};
