const rs = require("readline-sync");

const validOperations = {
  "/": "Division",
  "*": "Multiplication",
  "-": "Subtraction",
  "+": "Addition",
  "%": "Modulo",
};

function getOperator() {
  let operation = rs.question("What operation would you like to perform? ");
  if (operation.length === 1 && validOperations[operation]) {
    return operation;
  } else {
    console.log("Invalid operation, please enter: /, *, -, +");
    return getOperator();
  }
}

function getValidNumber(prompt) {
  let number = rs.question(prompt);
  if (isNaN(number)) {
    console.log("This is not a number");
    return getValidNumber(prompt);
  }
  return Number(number);
}

function performCalcultaion(op, num1, num2) {
  switch (op) {
    case "/":
      if (num2 === 0) {
        return undefined;
      }
      return num1 / num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    case "%":
      return num1 % num2;
    default:
      return "Invalid Operation";
  }
}

function calculate() {
  const op = getOperator();
  const num1 = getValidNumber("Please enter the first number: ");
  const num2 = getValidNumber("Please enter the second number: ");
  const result = performCalcultaion(op, num1, num2);
  console.log(`The result is: ${result}`);
}

calculate();
