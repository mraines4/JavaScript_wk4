// Hello, you!
// Write a function given a template.

function hello(name) {
    console.log(`Hello, ${name}!`);
}
hello('Mustache');

// Hello, you pt 2
// modify program such that if no name is given, it will print hello world.

function hello(name='world') {
    console.log(`Hello, ${name}!`);
}
hello();

// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`
}
console.log(madlib('Matt', 'Computer Lab'))

// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20%
// fair -> 15%
// bad -> 10%

function tipAmount(billAmount, serviceLevel) {
    let tip;
    if (serviceLevel === 'good') {
        tip = billAmount * .2;
    } else if (serviceLevel === 'fair') {
        tip = billAmount * .15;
    } else if (serviceLevel === 'bad') {
        tip = billAmount * .10;
    }
    return tip;
}
console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));

// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function totalAmount(billAmount, serviceLevel) {
    let total = tipAmount(billAmount, serviceLevel) + billAmount;
    return total;
}
console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

// Tip Calculator 3
// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

function splitAmount(billAmount, serviceLevel, numOfPpl) {
    let split = totalAmount(billAmount, serviceLevel) / numOfPpl;
    return split;
}
console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));