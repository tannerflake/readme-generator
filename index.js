import inquirer from "inquirer";
import fs from "fs";

inquirer.prompt([
    {
        type: "input",
        message: "Project Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Project Description:",
        name: "description"
    },
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation"
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "whyBuild"
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "problem"
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "whatLearned"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "instructionsAndExamples"
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "collaborators"
    },
    {
        type: "input",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.",
        name: "thirdPartyAssets"
    },
    {
        type: "input",
        message: "If you followed tutorials, include links to those here as well.",
        name: "tutorials"
    },
    {
        type: "input",
        message: "What lisence will you be using for your project?",
        name: "license"
    }
])

.then((data) => {
    const writeString = generateReadme(data)
    fs.writeFile("new-README.md", writeString, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("ReadMe file generated sucessfully!")
        }
    })
    
})

function generateReadme(data) {
    const readMeOutput = 
`
# ${data.title}

## Description
Project ${data.description}

## Motivation
${data.motivation}

## Why Build This Project?
${data.whyBuild}

## Problem It Solves
${data.problem}

## What I Learned
${data.whatLearned}

## Installation
### Steps to Install
${data.installation}

## Usage
### Instructions and Examples
${data.instructionsAndExamples}

## Collaborators
${data.collaborators}

## Third-Party Assets
${data.thirdPartyAssets}

## Tutorials
${data.tutorials}

## License
${data.license}
`

    return readMeOutput;
}