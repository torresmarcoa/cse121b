/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    // Function body 
    return number1 + number2;
}
function addNumbers () {
    // Function body
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal() {
    //input
    let subtotal = parseFloat(document.getElementById("subtotal").value)
    //pros
    if (document.getElementById("member").checked){
        subtotal = subtotal - subtotal * 0.2; 
    }
    //output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);



/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
const oddsNumbersElement = document.querySelector("#odds");
const oddsNumbersArray = numbersArray.filter(number => number % 2 === 1);
oddsNumbersElement.innerHTML = oddsNumbersArray;
/* Output Evens Only Array */
const evenNumbersElement = document.querySelector("#evens");
const evenNumbersArray = numbersArray.filter(number => number % 2 === 0);
evenNumbersElement.innerHTML = evenNumbersArray;
/* Output Sum of Org. Array */
const sumElement = document.querySelector("#sumOfArray");
const sumArray = numbersArray.reduce((sum, number) => sum + number);
sumElement.innerHTML = sumArray;
/* Output Multiplied by 2 Array */
const multiplyElement = document.querySelector("#multiplied");
const multiplyArray = numbersArray.map(number => number * 2);
multiplyElement.innerHTML = multiplyArray;
/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplyElement =  document.querySelector("#sumOfMultiplied");
const sumOfMultiplyArray = multiplyArray.reduce((accumulator, currentValue) => accumulator + currentValue);
sumOfMultiplyElement.innerHTML = sumOfMultiplyArray;
