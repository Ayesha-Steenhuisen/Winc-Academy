/*Exercise: Iterators - old and new style
"To iterate" means "to do something repeatedly". Doing things repeatedly is something that you are going to do regularly in software. We call one repetition one "iteration".

Usually, you're going to do things repeatedly if you have a collection of (similar) things, as in the case of an array. A practical example: you have an array of test scores and you want to know what the average test score is, or you want to know what the lowest or highest test score is. You are then "iterating over an array".

In JavaScript, you can iterate over things in several ways.

Old style: loops
Loops can be used for more than just iterating over a list of things. But we are now talking about that way of using loops.

While loop:

Create a new folder and a new JavaScript file.
Create an array called colors with the colors: yellow, blue, red, orange.
Write a while loop that logs the colors in the console and stops when all colors are printed.
For loop:

Use the same array as the starting point.
Write a for loop that logs the colors in the console and stops when all colors are printed.
Use the length of the array in your for loop: array.length.
Writing a for- or while-loop can take up quite a lot of space. It is also easy to make a mistake.

New style: array methods
Because iterating over arrays is done so often, the community that develops JavaScript has come up with some new useful things (actually copied) to make this a bit easier, more readable, and less error-prone. These new things are "array methods". Every array in JavaScript has these built-in functions that iterate over that array. The different array methods do different things, but they all iterate over an array.

You can do a lot with a few simple array methods. There are more array methods that you will learn more about later. So don't get caught up in array methods just yet when you google. Stick to this one for now.

forEach:
Array.prototype.forEach()
Use the same color array as the starting point
Use the forEach array method, to log all items in your array to the console.
These were simple exercises. The core of this exercise is understanding a for loop/while loop versus an array method. Answer the following questions and put this as a comment at the bottom of your file.

How many lines does my for loop and my while loop take?
How many lines does my forEach method take?
What other advantages do using an array method have over a for or a while loop? For example, which method do you find easier to read? Why?
Can you use an array method on an object? The answer is no. Suppose you have an object with 45 properties. Try to find out (use Google) how you can still console.log those 45 properties with a loop: Looping through the properties of an object. Try this piece of code and use an object with 5 properties for it. Are you iterating now?
*/
const array = ["blue", "green", "red", "yellow"]

// while loop
let index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
}

// for loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// forEach
array.forEach(e => console.log(e))