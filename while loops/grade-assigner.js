function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}

for (let i = 60; i <= 100; i++) {
    console.log(`For scoring ${i} points you get a ${assignGrade(i)}`)
}

// While loops & for loops: exercise
// Practice time! We will use for loops in three different exercises.

// Make a new exercise directory and add three empty JavaScript files:

// even - odd - reporter.js
// multiplication - tables.js
// grade - assigner.js
// Good luck!

// 1. Even Odd Reporter
// Write a loop that iterates from 0 to 20. During each iteration, check whether the current number is even or odd.Use console.log to view the output.

// Since this is your first looping exercise, use the following code to get started:

for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    // TODO: determine if i is odd or even
    // TODO: use console.log
}

// Expected output:
// 1 is odd 
// 2 is even 
// 3 is odd 
// 4 is even 
// ...
// Adjust the code as you see fit.To calculate whether a number is odd or even, check out the Remainder operator.

// 1. Multiplication tables
// We all know them from elementary school: multiplication tables.Write a script that prints the multiplication table of 9. The output should look like this:

// 1 x 9 = 9 
// 2 x 9 = 18 
// 3 x 9 = 27 
// etc...
// Bonus: use a nested for loop to write the multiplication tables of 1 until 10. Start the loop at the lowest number(in this case 1).The output now looks like this:

// 1 x 1 = 1 
// 1 x 2 = 2 
// 1 x 3 = 3 
// etc...

// ...
// 9 x 1 = 9 
// 9 x 2 = 18 
// 9 x 3 = 27
// ...etc 
// When you have completed the bonus, your script prints 100 lines to your console (10 for each multiplication table).

// 1. The grade assigner
// For this exercise, your start off with an existing function that determines the grade based on a score of 0-100:

function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}
// Write a for loop that iterates from 60 to 100. This value indicates the "score" of a student. During each iteration, call the assignGrade function with the current and log the following statement:

// For scoring 80 points, you get an C
// When you have completed the grade assigner, your script prints 40 lines to your console (one for each score).