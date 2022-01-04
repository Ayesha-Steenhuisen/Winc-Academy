const discount50 = true;
const isFemale = true;
const age = 23;
const firstName = "Abraham";
const totalAmount = 120;

if (age < 18) {
    console.log("You shall not pass!!!");
    return;
    // de return statement beeindigd de functie
} else if (age == 18 && age <= 25) {
    console.log("You are in for a discount of 50%");
} else {
    console.log("i am sorry, you are not eligible for any kinds of discounts");
}

console.log(firstName == "Abraham" || firstName == "Sarah");
if (firstName == "Abraham" || firstName == "Sarah") {
    console.log("You get a free beer!")
}

if (totalAmount >= 25 && totalAmount < 49) {
    console.log("You receive a free vega bitterbal portion");
} else if (totalAmount >= 50 && totalAmount < 74) {
    console.log("A free portion of nachos for you!");
} else if (totalAmount >= 100 && totalAmount < 124) {
    console.log("dude you are getting champagne!");
} else {
    console.log("spend more money, scrooge!");
}

// if (totalAmount >= 25) {
//     console.log("Free Bitterballen!");
// } else {
//     console.log("Spend more money, scrooge!");
// }


// if (totalAmount >= 50) {
//     console.log("Free Nachos!");
// }


// if (totalAmount >= 100) {
//     console.log("Free Champagne!");
// }

// Exercise: Comparison && Logical Operators
// Introduction
// You are going to make the check at the door of your pub even smarter. Make a copy of the contents of the previous exercise and continue working on this copy.

// Part 1: 50% discount
// In addition to the previous 18+ age check, you want to implement a new age check. You would like to attract younger visitors to your pub, which is why you have decided that pub visitors between the ages of 18 and 25 should receive a 50% discount on their beers.

// Write a new if-statement that checks if age is between 18 years or older and 25 years and younger.
// console.log("You get 50% off!") if that's true, and something else if it's not.
// Tip: use &&
// Part 2: Fun action!
// Your pub is 50 years old! That's why everyone called "Sarah" or "Abraham" gets a free beer! Okay, nobody is called Abraham these days, so let's make it "Bram".

// Create a new const called firstName and give the person a name.
// Check with an if statement whether the person is entitled to a free beer on this festive day.
// console.log() the result of your if/else statement to the console.
// Tip: use || .
// Part 3: Anniversary discount
// In addition to this playful promotion, there are many more festive discounts during your 50th anniversary.

// Is the bill of your order more than 25 euros? Then you get free (veggie) bitterballen. Is your bill more than 50 euros? Then you get a free portion of nachos.

// A bill of 100 euros or more? Then you get a free bottle of champagne.

// You guessed it, write an if/else tree to let the visitors know which gift they will receive based on the amount of euros of his or her order.
// Use the const named totalAmount .