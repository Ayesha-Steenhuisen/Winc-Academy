// If you prefer text over video: read the MDN docs on loops and iteration. Stop when you arrive at "labeled statement".

// Example code
// Run the following two loops on your own machine. Notice how the two looping methods are similar, but also have some differences. In particular, the while loop does not have a built-in halting condition.

// // while
let w = 0;
while (w < 5) {
    console.log(`This is while iteration number ${w}`);
    w++;
}

// for
for (let i = 0; i < 5; i++) {
    console.log(`This is for iteration number ${i}`);
}

// // Expected output:
// // This is while iteration number 0
// // This is while iteration number 1
// // This is while iteration number 2
// // This is while iteration number 3
// // This is while iteration number 4
// // This is for iteration number 0
// // This is for iteration number 1
// // This is for iteration number 2
// // This is for iteration number 3
// // This is for iteration number 4