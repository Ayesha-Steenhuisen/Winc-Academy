function paintTheWallRed() {
    console.log("The wall has been painted red");
}

paintTheWallRed();

function paintTheWall(color) {
    console.log(`The wall has been painted ${color}`);
}

paintTheWall("green")
paintTheWall("yellow")
paintTheWall()

function paintTheWallDirection(color, direction) {
    console.log(`The ${direction} wall has been painted ${color}`);
}
paintTheWallDirection("up", "purple");


// Function arguments: exercise
// In this exercise we're going to create a function with arguments.

// No arguments
// Let's create a function that can paint walls.

// create a new JavaScript file
// first just check if you can run it with node
// think of a good clear name for your function first
// to paint a wall print something like "The wall has been painted red" to the console
// first write a function that always paints the wall red(so no argument yet)
// call the function to check if it works
// Single argument
// now add an argument to the function
//     think of a good name for the argument
// change the function so it uses the argument when it runs
// if the function gets the string "green" it should print "The wall has been painted green"
// call the function to check if it works, be sure to pass an argument when you call the function
//     call the function a second time, now pass in another color
// what happens if we call the function without an argument ?
//     Multiple arguments
// Let's add another argument. We now want to choose the wall that we want to paint.

// the new function should output something like "The north wall has been painted orange" or "The south-east wall has been painted grey"
// think of a good name for this new argument
// change the function so it takes two arguments
// change the function so it uses both arguments
// call the function to see if it works
// does the order of the arguments matter when calling the function?
// what happens if you switch them in the function definition?
// what happens if you change the order of the arguments in the function definition and when calling the function?