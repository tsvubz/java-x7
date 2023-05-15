let firstNumber;
let secondNumber;

firstNumber = 9;
secondNumber = 5;

function toAdd (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let sum = toAdd(firstNumber, secondNumber);

document.getElementById('demo').innerHTML = sum;