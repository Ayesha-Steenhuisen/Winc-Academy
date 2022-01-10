// Functions calling functions: exercise
// In this exercise we're going to call functions from other functions.

// Hey kiddo
// We're going to write two functions, one that greets and another that checks if someone is an adult.

function checkingAge(age) {
    return age >= 18
    // >= is samen een boolean, er wordt gechecked of iets true or false is.
}

console.log(checkingAge(19))
console.log(checkingAge(17));


function checkingAge(age) {
    // return age >= 18
    // >= is samen een boolean, er wordt gechecked of iets true or false is.
    if (age < 18) {
        return false;
    } else {
        return true;
    }
    // long winded version
}

console.log(checkingAge(19))
console.log(checkingAge(17));


function greet(age) {
    // de functie structuur wordt aangehouden
    if (checkingAge(age)) {
        console.log("Hello there");
    } else {
        console.log("Hello kiddo");
    }
}



// create a function that has one parameter: the age
// this function should return true if the age is >= 18, false in all other cases
// think of a good name for the function and the parameter
// create a second function that has one parameter: the age
// think of a good name for the function and the parameter
// this second function uses (calls) the first function, giving it the age, to check if we get an adult age
// if it's an adult the second function should return "Hello there"
// if it's not an adult it should return "Hey kiddo"
// use console.log to display the return value of the second function
// experiment so you're sure your function works
// VAT calculations
// In this exercise we're going to let you figure out the steps a bit more.

// On almost everything you buy you pay VAT: Value Added Taxes. This is one way for the government to put taxes on sold goods. The amount of VAT varies per kind of purchase. In the Netherlands you pay 21% VAT on most goods, 9% VAT on food and 0% on some types of purchases.

// To calculate the VAT for a product with 21% VAT: baseprice * 0.21.

// For example, the price for a computer without VAT is 1000. The VAT percentage for a computer is 21%. The VAT would be: 1000 * 0.21, so 210. The price including VAT would be: 1000 * 1.21, so 1210.

// For example, the price for a loaf of bread without VAT is 2. The VAT percentage for a loaf of bread is 9%. The VAT would be: 2 * 0.09, so 0.18. The price including VAT would be: 2 * 1.09, so 2.18.

// To calculate the VAT and base price from a product that you bought with VAT you can do the reverse calculation.

// If you paid 1210 (including VAT) for a computer you can do: - 1210 / 1.21 to get the baseprice - 1210 - (1210 / 1.21) to get the VAT of 210

// If you paid 2.18 (including VAT) for a loaf of bread you can do: - 2.18 / 1.09 to get the baseprice - 2.18 - (2.18 / 1.09) to get the VAT of 0.18

// VAT exercise 1
// Now let's write some code. First let's write a function that takes the base price and the VAT percentage and returns the price including VAT. You must do the calculation of the VAT amount in a separate function. So, in the spirit of the lesson: we have a main function that does the main calculation and another function that we call from this main function.
function calculateVat(baseprice, percentage) {
    return baseprice * percentage / 100;

}

function calculateFullPrice(baseprice, percentage) {
    return baseprice + calculateVat(baseprice, percentage);
}
console.log(calculateFullPrice(100, 21));
// Make sure your functions work by testing them with different values and checking the result with a calculator or pen and paper.


// VAT exercise 2
// In this exercise we're going to calculate the base price and VAT amount. The main function you make should take the amount including VAT and the VAT percentage. The return value should be an array with two elements: base price and VAT amount. Again: make sure you use two functions, where the main one calls another function to do part of the calculation.

function calculateVat2(fullPrice, percentage) {
    // parameters mogen dezelfde naam blijven houden, bestaan alleen binnen de scope van de functie
    const bp = basePrice(fullPrice, percentage)
    return [bp, fullPrice - bp]
    // Het BTW bedrag is het verschil tussen de prijs inclusief en de prijs exclusief btw, dus 121-100 = 21
}

function basePrice(fullPrice, percentage) {
    return fullPrice / (1 + (percentage / 100))
    // dus stel ik heb 121 en ik wil daar 100 van maken, dat is 121/1.21, of 121/(1+0.21)
}
console.log(basePrice(1300, 21));
// Make sure your functions work by testing them with different values and checking the result with a calculator or pen and paper.