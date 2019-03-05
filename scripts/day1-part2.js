// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function printNumbers (start, end) {
    for (let i = start; i <= end; i++){
        console.log(i);
    }
}
// printNumbers(1, 10)


// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(size) {
    for (let i = 0; i < size; i++) {
        if (size !== i) {
            console.log('*'.repeat(size));
        // } else if (size === i) {
        //     console.log('\n');
        //     i = 0;
        // }
        }
    }
}
// printSquare(5);

// Print a box
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox (width, height) {
    for (let i = 1; i <= height; i++) {
        if (i === 1 || i === height) {
            console.log('*'.repeat(width));
        } else {
            console.log('*' + ' '.repeat(width-2) + '*')
        }
    }
}
// printBox(6, 4)

// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

banner = "Welcome to DigitalCrafts"
function printBanner(text) {
    console.log('*'.repeat(text.length + 4));
    console.log('* ' + text + ' *');
    console.log('*'.repeat(text.length + 4));
}
// printBanner(banner);

// Factor a Number
// Write a function factors which is given a number and returns an array containing all its factors.

function factors(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }
    console.log(result)
}
// factors(10);

// Caesar Cipher
// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

function cipher(string, offset) {
    // const alph = 'abcdefghijklmnopqrstuvwxyz '
    let newSentence = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let ascii = string.charCodeAt(i);
        // return ascii;
        if ((ascii) >=65 && (ascii) <= 90) {
            char = String.fromCharCode(((ascii - 65 + offset) % 26) + 65);
        } else if ((ascii) >=97 && (ascii) <= 122) {
            char = String.fromCharCode(((ascii - 97 + offset) % 26) + 97);
        }
        newSentence += char;

    }
    return newSentence;
}
console.log(cipher('Genius without education is like silver in the mine', 13));

// Caesar Cipher 2
// Write a function decipher which is given a string, an offset, and returns the original message.

function decipher(string, offset) {
    // const alph = 'abcdefghijklmnopqrstuvwxyz '
    let newSentence = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let ascii = string.charCodeAt(i);
        // return ascii;
        if ((ascii) >=65 && (ascii) <= 90) {
            char = String.fromCharCode(((ascii - 65 + offset) % 26) + 65);
        } else if ((ascii) >=97 && (ascii) <= 122) {
            char = String.fromCharCode(((ascii - 97 + offset) % 26) + 97);
        }
        newSentence += char;

    }
    return newSentence;
}

// console.log(decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13))

// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7


function leetspeak (string) {
    let leet = '';
    let leeted;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'A' || string[i] === 'a') {
            string[i] = 4;
            leet += string[i];
        } else if (string[i] === 'E' || string[i] === 'e') {
            leeted = 3;
            leet += leeted;
        } else if (string[i] === 'G' || string[i] === 'g') {
            leeted = 6;
            leet += leeted;
        } else if (string[i] === 'I' || string[i] === 'i') {
            leeted = 1;
            leet += leeted;
        } else if (string[i] === 'O' || string[i] === 'o') {
            leeted = 0;
            leet += leeted;
        } else if (string[i] === 'S' || string[i] === 's') {
            leeted = 5;
            leet += leeted;
        } else if (string[i] === 'T' || string[i] === 't') {
            leeted = 7;
            leet += leeted;
        } else {
            leet += string[i]
        }
    }
    return leet
}
// console.log(leetspeak('Leet'))

// Long-long Vowels
// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

function longLongVowels (string) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
                newString += string[i].repeat(3);
            }
        } else {
            newString += string[i];
        }
    }
    console.log(newString)
}
// longLongVowels('Good');
// longLongVowels('Cheese');
// longLongVowels('Man');

// Sum the numbers
// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

function sumNumbers (arr) {
    let total = 0;
    arr.forEach(function (num) {
        total += num
    })
    console.log(total);
}
// sumNumbers([1, 4, 8])

// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

function positiveNumbers (arr) {
    let pos = arr.filter(function(num) {
        return num >= 0;
    });
    console.log(pos);
}
// positiveNumbers([1, -3, 5, -3, 0]);
// positiveNumbers([1, 2, 3]);
// positiveNumbers([-1, -2, -3]);

// Matrix Addition
// Write a function matrixAdd which is given two two-dimensional arrays, and returns a new two-dimensional array containing their matrix sum.

function matrixAdd (matrix) {
    let arr1a = [matrix[0][0]];
    let arr1b = [matrix[0][1]];
    let arr2a = [matrix[1][0]];
    let arr2b = [matrix[1][1]];
    console.log(arr1a);
    console.log(arr1b);
    console.log(arr2a);
    console.log(arr2b);
    let listFull = [];
    let listFinal = [];
    for (let i = 0; i < arr1a.length; i++) {
        listFull.push(arr1a[i][0] + arr2a[i][0]);
        listFull.push(arr1a[i][1] + arr2a[i][1]);
        listFull.push(arr1b[i][0] + arr2b[i][0]);
        listFull.push(arr1b[i][1] + arr2b[i][1]);
    }
    console.log(listFull)
    listFinal = [[listFull[0], listFull[1]], [listFull[2], listFull[3]]];
    console.log(listFinal)
}
// matrixAdd([[[1, 3], [2, 4]], [[5, 2], [1, 0]]]);

// Matrix Multiplication
// Write a function matrixMultiply which is given two two-dimensional arrays - you can assume the matricies are of size 2x2. It will return the result of matrix multiplication between the two given matricies.

function matrixMultiply (matrix1, matrix2) {
    let row = 0;
    let col = 0;
    let row2 = 0;
    let result = [[0, 0], [0, 0]];
    
    while(row < 2){
        // result[row] = [];
        while(col < 2){
            while(row2 < 2){
                result[row][col] += matrix1[row][row2] * matrix2[row2][col];
                row2++;
            }
            row2 = 0;
            col++;
        }
        col = 0;
        row++;
    }
    console.log(result);
}
// matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]);

// Rock Paper Scissors
// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

function rockPaperScissors (player1, player2) {
    if (player1 === player2) {
        console.log('draw');
    } else if (player1 === 'rock') {
        if (player2 === 'scissors') {
            console.log('player 1');
        } else {
            console.log('player 2');
        }
    } else if (player1 === 'paper') {
        if (player2 === 'rock') {
            console.log('player 1');
        } else {
            console.log('player 2');
        }
    } else if (player1 === 'scissors') {
        if (player2 === 'paper') {
            console.log('player 1');
        } else {
            console.log('player 2');
        }
    } 
}
// rockPaperScissors('rock', 'scissors');
// rockPaperScissors('rock', 'paper');
// rockPaperScissors('paper', 'paper');

// Tic Tac Toe
// Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by:
// returning 'O' if O makes a row
// returning 'X' if X makes a row
// return null if neither makes a row

function ticTacToe (array) {
    let col1 = [];
    let col2 = [];
    let col3 = [];
    for (let i = 0; i < array.length; i++) {
        col1.push(array[i][0]);
        col2.push(array[i][1]);
        col3.push(array[i][2]);
        if (array[i][0] === array[i][1] && array[i][1]=== array[i][2]) {
            console.log(array[i][0]);
        }
    }
    if (col1[0] === col1[1] && col1[1] === col1[2]) {
        console.log(col1[0]);
    } else if (col2[0] === col2[1] && col2[1] === col2[2]) {
        console.log(col2[0]);
    } else if (col3[0] === col3[1] && col3[1] === col3[2]) {
        console.log(col3[0]);
    }
}

// ticTacToe([
//     ['O', 'O', 'O'],
//     ['X', null, 'X'],
//     [null, 'X', null]
//     ]);
// ticTacToe([
//     ['O', 'X', 'O'],
//     ['O', 'X', null],
//     [null, 'X', null]
//     ]);
// ticTacToe([
//     ['O', 'X', 'O'],
//     ['O', 'O', null],
//     [null, 'X', 'X']
//     ]);