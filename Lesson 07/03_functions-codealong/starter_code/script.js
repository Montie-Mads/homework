// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// function squared(namingStuff) {
//     let mySquare = namingStuff * namingStuff;
//     return mySquare;
// }

function squared(numberToBeSquared) {
    return numberToBeSquared * numberToBeSquared;
}



// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)

// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

function stringLength(toBeMeasured) {
    return toBeMeasured.length;
}


// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));

function addNumbers(ichi, ni) {
    const addedTogetger = ichi + ni;
    return addedTogetger;
}

// also works 

function addNumbers(ichi, ni) {
    return ichi + ni;;
}

function isSquareEven(ichi) {
    let theSquare
}


// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

console.log(sayHello("Paul"));

function sayHello(personName) {
    return "Hello, " + personName;
}

function sayHello(personName) {
    if (typeof personName == "string") {
        return "Hello," + personName
    } else {
        return "Goodbye";
    }
}

console.log(sayHello(89));''
