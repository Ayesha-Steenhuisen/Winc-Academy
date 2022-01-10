/*
Exercise: Guess the number game
You will create your very first own project. You will make a game in JavaScript!

"Guess the number" - game, goes as follows:

The computer chooses a (semi)random number. The user tries to guess it.

First, read the requirements carefully. Take note of which functionalities you think you will need. In other words: which tasks should your program execute to play the game?

The game can be built in two possible ways. Choose the one that makes the most sense to you.

In a browser. If you're already familiar with adding JavaScript to a website, do this exercise in a browser. Use prompt to ask the user for input and alert to report something to the user.
In REPL.it. If your main experience is with REPL.it choose this. Use prompt to ask the user for input and console.log to report something to the user.
Requirements
These are the requirements that your project should fulfill:

As a user, I want an introductory message that greets the user and asks for their name. "Welcome! What is your name?"
As a user, I want to be able to enter my name and click enter.
As a user, after I entered my name, I want to see a message: "Hey [name]"
As a user, after the greeting with my name, I want to be asked for a new input with a digit. For example: "Enter a number between 0 and 25 to start guessing..."
As a game developer, I want the user to have a realistic chance to win, therefore I take a random number between 0 and 25. Hint: use Math.random()
As a user, I want to be able to enter and number and click enter.
As a user, I want to receive a message when I guessed the wrong number, for example: "Unfortunately, that is not correct!". Afterward, I want to be asked to guess again.
As a user, I want to receive a message when I guess the right number, for example: "Congratulations, you have won the game!". The game is now finished.
As a user, I want to receive a message when the game is done, for example: "Bye [name], see you!"
Bonus
A user gets a maximum of five tries to guess the number.
As a user, I want to see how many tries I have left after every attempt.
As a user, I want to receive a message when I have run out of tries. The game is now finished.
A user can specify the range between the random number that will be chosen.
As a user, at the start of the game, I want to be asked which is the smallest and which is the largest number to guess.
As a user, I now play with the number range that I entered at the start of the game.
Design
There is no design available for this exercise.

Tips & Tricks
Start with making a list of To-Dos for yourself. Which functionalities are you making? Are those in separate functions? Which steps are going to be taken? Write them down.
Are you doing this exercise in the browser? Use the prompt() and alert() functions from JavaScript. For every message ask yourself, do I want the user to tell me something, or do I want to tell the user something?
*/

let name = ""
let toGuess
let tries = 5
let smallest = 0
let largest = 25

function greet() {
    name = prompt("What is your name?")
    alert(`Hello ${name}`)
}

function askNumbers() {
    let done = false
    while (!done) {
        smallest = parseInt(prompt(`Hello ${name}, what is the smallest number?`))
        largest = parseInt(prompt(`${name}, what is the largest number?`))
        if (largest < smallest) {
            alert("The smallest number must be smaller than the largest number")
        } else {
            done = true
        }
    }
}

function generateNumber() {
    // toGuess = Math.round(Math.random() * 25)
    // 1. Een willekeurig getal tussen 0 en het verschil tussen het kleinste en het grootste (bij 10 en 15, tussen 0 en 5)
    // 2. Tel daar het kleinste bij op 
    toGuess = Math.floor(Math.random() * (largest - smallest)) + smallest
    console.log(toGuess);
}

function guess() {
    let g = prompt(`Guess a number between ${smallest} and ${largest}, you have ${tries} left`)
    if (parseInt(g) == toGuess) {
        return true
    } else {
        tries -= 1
        return false
    }
    // return parseInt(g) == toGuess

}

greet()
askNumbers()
generateNumber()
while (!guess() && tries > 0) {
    alert("That is incorrect")
}
if (tries > 0) {
    alert("That is correct")
} else {
    alert("You have run out of tries")
}

alert(`Bye ${name}`)

/*
let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
  name = prompt("Hoe heet je?");
}

alert("Welkom bij Guess the Number " + name + "!!");

numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
console.log("Pssst het nummer is: " + numberToBeGuessed);

while (guess !== numberToBeGuessed) {
  guess = parseInt(prompt("Voer een nummer in.."));
  alert("Je gok is:" + guess);
  if (guess > numberToBeGuessed) {
    alert("Helaas, je gok was te hoog. Probeer het opnieuw:");
  } else if (guess < numberToBeGuessed) {
    alert("Helaaaas, je gok was te laag. Probeer het opnieuw:");
  } else {
    alert("Goed geraden, het nummer was inderdaad: " + guess);
    alert(
      "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!"
    );
  }
}
 34  js_guess_the_number/prompt/script_template.js
@@ -0,0 +1,34 @@
// Maak deze oplossing af.

let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
  // vraag hier om de naam
}

console.log("Welkom bij Guess the Number " + name + "!!");

// kies hier een random getal
// numberToBeGuessed = ;
console.log("Pssst het nummer is: " + numberToBeGuessed);

// onder welke voorwaarde moeten we blijven loopen?
while () {
  // guess = ..vraag om het nummer..
  console.log("Je gok is:" + guess);
  if () {
    console.log("Je gok was te hoog");
  } else if () {
    console.log("Je gok was te laag");
  } else {
    console.log("Goed geraden, het nummer was inderdaad " + guess);
  }
}

console.log(
  "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!"
);
 55  js_guess_the_number/readline/script_solution.js
@@ -0,0 +1,55 @@
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

let numberToBeGuessed = null;

  const getNameFromUser = function(question) {
     readline.question(question, (answer) => {
        console.log("Hallo! ", answer);
        startGame();
    })
  }

  const startGame = function() {
      const min = 0;
      const max = 25;
      numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
      console.log(numberToBeGuessed);
      getNumberInputFromUser();
  }

  const endGame = function() {
    // Zeg dag tegen je gebruiker en bedankt voor het spelen
    console.log("We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!")
    readline.close();
  }

  const checkInputFromUser = function(inputUser){
    console.log("Je input wordt gecheckt...:" )
    // Parse de input naar een number
    const numberInput = Number(inputUser)
    if (numberInput === numberToBeGuessed) {
      console.log(" dat is goed!! Gefeliciteerd")
      endGame()
    } else {
      console.log(inputUser, " ...dat is helaas niet goed. Probeer het opnieuw")
      getNumberInputFromUser()
    }
    //Check of de gebruiker het juiste nummer heeft geraden.
    // Zo ja: feliciteer de gebruiker en ga dan door naar endgame
    // Zo nee: vraag nog een keer om input van de gebruiker
    // Zie ik daar een if statement? Ik denk het wel
  }

  const getNumberInputFromUser = function() {
    readline.question(`Voer een nummer in...`, (number) => {
        // Doe iets met de input van de user.
        // roep een andere functie aan...
        console.log("Je raadde", number)
        checkInputFromUser(number)
      })
  }

getNameFromUser('Whats your name?')
 53  js_guess_the_number/readline/script_template.js
@@ -0,0 +1,53 @@
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const getNameFromUser = function(question) {
     readline.question(question, (answer) => {
        console.log("Hallo! ", answer)
        startGame()
    })
  }
*/
/*
Hierboven zie je de functies die te maken hebben met de readline module van node.
 Je mag erin prutsen als je wilt weten hoe het werkt, maar je hoeft er niks aan de veranderen voor je spel.
 Er is 1 functie waar je ook de readline module in gebruiken: getNumberInputFromUser.
 Je moet daar nog een klein dingetje aan toevoegen, daarom staat die functie wel hieronder  */

// vul de volgende functies aan! 
/*
const numberToBeGuessed = null;

const startGame = function () {
    // Inititaliseer je game 
    // Pak een "random" nummer tussen de 0 en 25
    // assign het "random" number aan de variable "numberToBeGuessed" die je hierboven declared ziet.
    getNumberInputFromUser()
}

const endGame = function () {
    // Zeg dag tegen je gebruiker en bedankt voor het spelen 
    readline.close()
}

const checkInputFromUser = function (inputFromUser) {
    //Check of de gebruiker input (inputFromUser) het juiste nummer heeft geraden. 
    // Zo ja: feliciteer de gebruiker en ga dan door naar endGame functie
    // Zo nee: vraag nog een keer om input van de gebruiker met de getNumberFromUser functie
    // Zie ik daar een if statement? Ik denk het wel.

    // Pro-tip: je gaat de inputFromUser vergelijken met de numberToBeGuessed  
    // Is inputFromUser van het type number? Hoe kun je dat checken? 
    // Zo nee, hoe kun je dat veranderen? Zodat je de vergelijking met je if-statement goed kunt uitvoeren?
    // Is numberToBeGuessed van het type number? 
}

const getNumberInputFromUser = function () {
    readline.question(`Voer een nummer in...`, (number) => {
        console.log("Je raadde dit nummer:", number)
        // ga door met de checkInputFromUser functie
    })
}

getNameFromUser('Wat is je naam?')
    */