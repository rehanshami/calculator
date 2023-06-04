// 1. Basic functions for all the math operations
// 2. Create three variables for each part of the operation
// number1, operator and number 2
// 3. Function operate, that takes an operator and 2 numbers.
// Then calls a basic function using the numbers/
// 4. Create HTML template for calculator
// 5. Functions that populate display when you click the number buttons
// Store display value in a variable
// 6. 

// Creating basic functions for the calculator operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let number1;
let number2;
let operator = "";

function operate (op, num1, num2) {
    switch(op) {
        case '+':
            return add(num1, num2);
            break;

        case '-':
            return subtract(num1, num2);
            break;

        case '*':
            return multiply(num1, num2);
            break;

        case '/':
            return divide(num1, num2);
            break;    

    }
}

