// Error Handling with a Logical Error

try {
  let x = 10 / 0; // This will throw a "Division by zero" error
} catch (error) {
    if (error instanceof TypeError) {
    console.log("TypeError occurred: ", error.message);
  } else if (error instanceof ReferenceError) {
    console.log("ReferenceError occurred: ", error.message);
  } else if (error instanceof RangeError) {
    console.log("RangeError occurred: ", error.message);
  } else {
    console.log("An error occurred: ", error.message);
  }
}

// Error Handling with a Custom Error 

try {
  // Code that throws a custom error
  let y = "hello";
  if (typeof y !== "number") {
    throw new Error("Invalid data type");
  }
} catch (error) {
  console.log("Custom error occurred: ", error.message);
}

// Error Handling With JSON Parsing

const jsParse = { 
      name : John,
      age : 30
};
try {

const parser = JSON.parse (jsParse);

 console.log(parser);
}
catch (error) {
console.log('Error: invalid JSON string');
}
