// Introduction
// There are three ways to write a function in JavaScript:

// function declarations
// function expressions
// arrow functions
// The question "why are three ways?" is very common.The answer is that JavaScript is an older language and it has evolved during its existence.As time went on JavaScript programmers required new ways of writing functions.

// Whichever way you write a function does not influence how you call the function. That's always the same.

// Function declarations
function add(number1, number2) {
    return number1 + number2;
}

add(5, 6); // 11
// This is the classical, old style of creating a function. This style looks a lot like how some other languages write functions.Because of this and because it's the oldest some people still prefer this style.

// This style has a few drawbacks which are a bit technical.The most important drawback is that you cannot assign or re - assign a function declaration. Function declarations also cannot create anonymous functions.

// A quite technical drawback of function declarations is that they are "hoisted".Read more about hoisting at the Mozilla Web Docs.

// If you use a function declaration: don't add a semicolon after the last }.

// Function expressions
const add = function (number1, number2) {
    return number1 + number2;
};

add(5, 6); // 11
// This is the more modern way of writing functions.This style is common in modern JavaScript.

// What happens here is two steps:

// we have an "expression" that evaluates to a function
//     we assign the function to a variable(add in this case)
// We can use function expressions to create anonymous functions.With anonymous functions we don't assign the function to a variable, but use it immediately in some way.

// If you use a function expression and assign it: add a semicolon after the last }.

// Arrow functions
const add = (number1, number2) => {
    return number1 + number2;
};
add(5, 6); // 11
// Arrow functions are the most modern style of writing functions.This style is also common in modern JavaScript.

// Arrow functions are also expressions.So they have the same properties as other function expressions: they are evaluated, we can assign them, we can use them to create anonymous functions and we need to add a semicolon when we assign one.

// Arrow functions have a compact syntax that not everybody likes.A nice trick to more easily read an arrow function is to read the arrow(=> ) as "results in".So: "this function results in number1 + number2".

//     Note

// Arrow functions are technically different from the other two function styles in another couple of ways.If you're just learning JavaScript you don't need to worry about the differences.If you want know more you can read about the technical details of arrow functions.

// If an arrow function has 0 arguments it looks like this:

const sayHello = () => {
    console.log("hello");
};
// If an arrow function has 1 argument you can skip the parentheses and it looks like this:

const square = number => {
    return number * number;
};

const square = number => {
    return number * number * number / number;
};

const square = number => number * number * number / number;

const sum = (number1, number2) => number1 + number2

const sub = (number1, number2) => number1 - number2

const niceFunc = (number1, number2) => sum(number1, number2) * sub(number2, number1)

// dynamic values
// const sum = (number1, number2) => number1 + number2 
// sum(1, 2) -> number1 = 1, number2 = 2 -> 3
// sum(5, 6) -> number1 = 5, number2 = 6 -> 11

// static values 
// const sum = (number1, number2) => 1 + 2
// sum(1, 2) -> number1 = 1, number2 = 2 -> 3
// sum(5, 6) -> number1 = 5, number2 = 6 -> 3 


const niceFunc = (number1, number2) => {
    // sum(1, 2) * sub(2, 1)
    // return sum(number1, number2) * sub(number2, number1) 
    // same amount of paramers for every method like sum and sub
    return sum(1, 2) * sub(2, 1)
}

const result = niceFunc(1, 2)
// We can sometimes skip the curly braces and the return keyword when writing an arrow function to make the syntax even more compact. We can only do this if:

// there's only one statement in the "body" of the function
// we want the evaluated value of that statement to be the value the function returns
// However: this shorter syntax can decrease readability and ease of debugging, so don't overuse it.

const add2 = (number1, number2) => number1 + number2;

add2(5, 6); // 11
// Best practices
// We advise you to do the following when writing functions:

// always use function expressions (normal or arrow)
// don't mix function expressions and declarations
// use arrow functions for very short functions (in general it's a good idea to write short functions)
// use arrow functions when you're comfortable with them


// Functions: three ways to write them: exercise
// In this exercise we're going to write a single function in three styles.

// The function we're going to create will do the following.

// take two numbers
// each number will be squared (multiplied with itself)
// the squared numbers will be added together
// this sum will be squared again
// the resulting value is returned
// Write this function in all three styles and give the functions and their arguments good names. They cannot have exactly the same name. There are multiple ways to do this.

// function declaration
// function expression
// arrow function
// After you're done, check that all three functions give the same result if you give them the same arguments.

// function declaration

const awesomeFunc = function () {
    return 2
}

// function expression

function awesomeFunc() {
    return 2
}

// arrow function

const awesomeFunc = () => {
    return 2
}

const awesomefunc = () => 2

// assignment
// function declaration
// take two numbers
const someFun = function (number1, number2) {
    // each number will be squared (multiplied with itself)
    const number1Squared = number1 * number1
    const number2Squared = number2 * number2
    // the squared numbers will be added together
    const numbersSquaredResult = number1Squared + number2Squared
    // this sum will be squared again
    // the resulting value is returned
    return numbersSquaredResult * numbersSquaredResult
}
console.log(someFun(1, 2))

// function expression

function someFun(number1, number2) {
    // each number will be squared (multiplied with itself)
    const number1Squared = number1 * number1
    const number2Squared = number2 * number2
    // the squared numbers will be added together
    const numbersSquaredResult = number1Squared + number2Squared
    // this sum will be squared again
    // the resulting value is returned
    return numbersSquaredResult * numbersSquaredResult
}
console.log(someFun(1, 2))

// arrow function

const someFun = (number1, number2) => {
    // each number will be squared (multiplied with itself)
    const number1Squared = number1 * number1
    const number2Squared = number2 * number2
    // the squared numbers will be added together
    const numbersSquaredResult = number1Squared + number2Squared
    // this sum will be squared again
    // the resulting value is returned
    return numbersSquaredResult * numbersSquaredResult
}
console.log(someFun(1, 2))

// take two numbers
// each number will be squared (multiplied with itself)
// the squared numbers will be added together
// this sum will be squared again
// the resulting value is returned
// Write this function in all three styles and give the functions and their arguments good names. They cannot have exactly the same name. There are multiple ways to do this.


// It's completely possible and normal to call a function when you're already inside another function. And actually: most of the code you'll write will be inside of functions. Having code outside of functions has certain drawbacks.

// What can we do inside of a function?
// Inside of a function you can write almost any code you want.You can also write as much or as little code as you need.However it's good practice to let a function do only one thing. This is also known as the "single responsibility principle". If a function does more than one thing it could be a good idea to split it up.

// Calling functions
// Calling a function works exactly the same inside and outside of a function:

const scream = function () {
    console.log("Aaaaaaa!");
};

// Calling scream outside of a function
scream();

// Here we call scream inside of a function
const makeNoise = function () {
    scream();
};

makeNoise();
// Return values
// When a function returns the return value is "passed" or given back to the location where the function was called.It does not matter if that's inside or outside of a function.

const add = function (numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which is outside of a function.
const eight = add(3, 5);
console.log(eight);

const doCalculation = function () {
    // The add function returns to this line, which is inside of a function.
    const six = add(2, 4);
    console.log(six);
};

doCalculation();
// Debugging
// If you have a lot of functions calling each other it can be a little confusing what happens when. To help figure this out you can use console.log statements.

const makePositive = function (number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function (number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function (number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function (number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));