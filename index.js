import inquirer from "inquirer";

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
        name: "lisence"
    }
])



// .then((data) => {
//     //const writeString = gene
// })

// function generateReadme(data) {
//     const readMeOutput = 
//     `
//     # <Project Title>

//     ## Description
//     <Project Description>

//     ## Motivation
//     <What was your motivation?>

//     ## Why Build This Project?
//     <Why did you build this project?>

//     ## Problem It Solves
//     <What problem does it solve?>

//     ## What I Learned
//     <What did you learn?>

//     ## Installation
//     ### Steps to Install
//     <What are the steps required to install your project?>

//     ## Usage
//     ### Instructions and Examples
//     <Provide instructions and examples for use.>

//     ## Collaborators
//     <List your collaborators, if any, with links to their GitHub profiles.>

//     ## Third-Party Assets
//     <If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.>

//     ## Tutorials
//     <If you followed tutorials, include links to those here as well.>

//     ## License
//     <What license will you be using for your project?>
//     `
// }


// .then((data) => {
//     const writeString = generateHTML(data)
//     fs.writeFile("userPage.html", writeString, (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Sucessfully created your file!");
//     }

//     }
// )
//     }
    
// )

// function generateHTML(data) {
//     const htmlOutput = 
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h2>My name is ${data.userName}</h2>
//     <h2>My location is ${data.userLocation}</h2>
//     <h2>My bio is ${data.userBio}</h2>
//     <h2>My LinkedIn is ${data.userLinked}</h2>
//     <h2>My GitHub is ${data.userGit}</h2>
// </body>
// </html>
//     `
//     return htmlOutput
// }


