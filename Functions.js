// Function declaration without parameters and return value
function greet() {
  console.log("Aselamu Alykum!");
}

greet(); // Output: Aselamu Alykum!

// Function declaration with parameters and return value
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = addNumbers(5, 7);
console.log(result); // Output: 12

// Function declaration with default parameter
function multiplyNumbers(num1, num2 = 1) {
  let product = num1 * num2;
  return product;
}

let result1 = multiplyNumbers(3, 4);
let result2 = multiplyNumbers(2);
console.log(result1); // Output: 12
console.log(result2); // Output: 2

// Function expression
let subtractNumbers = function(num1, num2) {
  let difference = num1 - num2;
  return difference;
};

let result3 = subtractNumbers(10, 5);
console.log(result3); // Output: 5

// Arrow function
let divideNumbers = (num1, num2) => {
  let quotient = num1 / num2;
  return quotient;
};

let result4 = divideNumbers(20, 4);
console.log(result4); // Output: 5
