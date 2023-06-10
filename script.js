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
    if (num2 === 0) {
        console.log("Number2=" + num2)
        return "ERROR";
      }
    return num1 / num2;
}

let number1 = "";
let number2 = "";
let operator = "";
let result = "";

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

// Get the numbers
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const previousOperand = document.querySelector(".previous-value");
const currentOperand = document.querySelector(".current-value");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const backspaceButton = document.querySelector(".backspace");
const negativeButton = document.querySelector(".negative");

// Add event listeners to number buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        if (!operator) {
            currentOperand.textContent += button.textContent;
            number1 = parseFloat(currentOperand.textContent);
        }
        
        else {
            currentOperand.textContent += button.textContent;
            number2 = parseFloat(currentOperand.textContent);
         }  
        
        console.log("this is number1:" + number1)
        console.log("this is number2:" + number2)
    })

})


// Add event listener to operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {

      if (operator === '/' && number2 === 0) {
            currentOperand.textContent = 'ERROR';
            return;
          }

      if (number1 && number2 && operator) {
        result = operate(operator, number1, number2);
        currentOperand.textContent = result;
        number1 = result;
      }
  
      operator = button.textContent;
  
      if (!number2) {
        number2 = parseFloat(currentOperand.textContent);
      }
  
      previousOperand.textContent = currentOperand.textContent + operator;
      currentOperand.textContent = "";
    });
  });
  
  
// Add event listener to equals button
equalsButton.addEventListener("click", () => {

  if (operator === '/' && number2 === 0) {
        currentOperand.textContent = 'ERROR';
        return;
    }

  if (number1 && number2 && operator) {
        currentOperand.textContent = "";
        result = operate(operator, number1, number2);
        currentOperand.textContent += result;
        previousOperand.textContent = "";
        number1 = result;
        number2 = "";
        operator = "";
  }
})

clearButton.addEventListener("click", () => {
    number1 = "";
    number2 = "";
    operator = "";
    previousOperand.textContent = "";
    currentOperand.textContent = "";
})

decimalButton.addEventListener("click", () => {
    
    if (!currentOperand.textContent.includes(".")) {
    currentOperand.textContent+=".";

    }
})

backspaceButton.addEventListener("click", () => {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
  if (!operator) {
    number1 = parseFloat(currentOperand.textContent);
}

else {
    number2 = parseFloat(currentOperand.textContent);
 }  
})

negativeButton.addEventListener("click", () => {
  if (!currentOperand.textContent.includes("-")) {
    currentOperand.textContent = "-" + currentOperand.textContent;
    if (!operator) {
      number1 = parseFloat(currentOperand.textContent);
    }
  
    else {
      number2 = parseFloat(currentOperand.textContent);
    }  
    
  }
  else {
    currentOperand.textContent = currentOperand.textContent.replace("-", "");
    if (!operator) {
      number1 = parseFloat(currentOperand.textContent);
    }
  
    else {
      number2 = parseFloat(currentOperand.textContent);
    }  
    
  }



})