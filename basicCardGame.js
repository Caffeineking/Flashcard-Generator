var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");
var randomNumber = Math.floor((Math.random() * 9) + 1)
var questions = [
    new BasicCard("Which computer hardware device provides an interface for all other connected devices to communicate?", "Motherboard"),
    new BasicCard("True or False, the logo for Snapchat is a Bell.", "False"),
    new BasicCard("The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:", "HD"),
    new BasicCard("What is the domain name for the country Tuvalu?", ".tv"),
    new BasicCard("Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?", "Apple"),
    new BasicCard("In web design, what does CSS stand for?", "Cascading Style Sheet"),
    new BasicCard("This mobile OS held the largest market share in 2012.", "iOS"),
    new BasicCard("How many values can a single byte represent?", "256"),
    new BasicCard("The C programming language was created by this American computer scientist. ", "Dennis Ritchie"),
    new BasicCard("What amount of bits commonly equals one byte?", "8")
]

function initialize() {
    inquirer.prompt([{
        name: "confirm",
        message: "Do you want to play a game?",
        type: "list",
        choices: ["YES", "NO"]
    }]).then(
        function (data) {
            if (data.confirm === "YES") {
                console.log("ok, lets play");
                randomStart();
            } else {
                console.log("BYE!");
            }
        }
    )
}

function randomStart() {
    inquirer.prompt([{
        name: "question",
        type: "input",
        message: questions[randomNumber].front
    }]).then(
        function (data) {
            if (data.question.toLowerCase() === questions[randomNumber].back.toLowerCase()) {
                console.log("you got that right!");
                correctAnswers++;

            } else {
                console.log("sorry, the answer is " + questions[randomNumber].back + ", try a different question");
                wrongAnswers++;

            }

        }

    )
};

initialize();