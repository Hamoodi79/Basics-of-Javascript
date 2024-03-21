// For loop for iterating over an array
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// For...in loop for iterating over an object
let person = {
  name: "Abdulhamid",
  age: 22,
  occupation: "Software Engineer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// While loop for repetitive tasks
let count = 0;

while (count < 5) {
  console.log("Count: " + count);
  count++;
}

// Do...while loop for repetitive tasks
let i = 0;

do {
  console.log("Value of i: " + i);
  i++;
} while (i < 5);
