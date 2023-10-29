# `Javascript Exercises`

[Return to main page](../README.md)

---

## `Table of Contents`

- [General Exercises](#general-exercises)
- [Adding JS to the Web Page](#adding-js-to-the-web-page)

---

## `General Exercises`

**Important:** You are encouraged to solve these exercises using functions as far as, and when, it is possible.

---

### `First Steps`

Output a phrase or greeting to the terminal. Add a single line and a multiline comment to it.

Hints:

1. The traditional first output for a new programmer is "Hello World";
1. Do NOT use functions for this exercise.

Solution:

```js
/* this is my first program. I shall output a greeting to terminal. I shall use the console.log() function and supply it with a "Hello World" as an argument */
console.log("Hello World"); // outputs "Hello World to the terminal
```

---

### `Declaring and Initializing Variables`

Declare two variables of any type you like. Initialize the first one and output it to terminal. After you output the first variable to the terminal, initialize the second one and output it to the terminal. Then update the first variable with a new value and output it again to the terminal.

Hints:

1. Use the `let` keyword to declare variables not the `var` keyword.

```js
let a = 10;
let b;
console.log(a);
b = 15;
console.log(b);
a = 100;
console.log(a);
```

---

### `Declaring Global Variables and Manipulating them with a Function`

Declare a global variable and initialize it and output it to terminal by means of a function.

Hints:

1. Place your functions at the top of your code;

Solution:

```js
function useVariable() {
  a = 10;
  console.log(a);
}

let a; // the global variable
useVariable(); // calling the function to initialize and output the global terminal
```

---

### `Declaring and Initializing Variables of All Javascript's Types`

Create and initialize variables of all Javascript's types and output them to console.

Hints:

- Javascript's basic types are: string, number, bigint, boolean, null, undefined, object, array.

Solution:

```js
let greeting = "Hello"; // string
let myNum = 1000; // number
let bigNum =
  9843827581636835686494617638746761864183875423958935893859350302302329059398438275816368356864946176387467618641838754239589358938593503023023290593984382758163683568649461763874676186418387542395893589385935030230232905939843827581636835686494617638746761864183875423958935893859350302302329059398438275816368356864946176387467618641838754239589358938593503023023290593n; //bigint
let rich = false; // boolean
let nullValue = null; // null
let placeholder; // not initialized therefore undefined
let myObject = { name: "Satoshi", surname: "Nakamoto" }; // object
let myArr = [1, 2, 3, 4, 5]; // array

console.log(greeting);
console.log(myNum);
console.log(bigNum);
console.log(rich);
console.log(nullValue);
console.log(placeholder);
console.log(myObject);
console.log(myArr);
```

---

### `Outputting All Types with a Loop in a Function`

Take all the variables you created for the last exercise and create a function that outputs them all to terminal with a loop.

Hints:

1. The function should take an array as a parameter;
1. The array parameter should contain all the variables;
1. In the function set up a loop that loops through each of the variables in the array parameter;
1. Remember that each item in an array is accessed like this array[index of item];
1. To get the length of the array, use array.length;
1. The first item in the array is `[0]` and the last is `[array.length - 1]`.

Solution:

```js
function outputVariables(variableArray) {
  let arrLength = variableArray.length;
  /* 
  create the for loop to cycle through the array:
  1. declare i to use as an index;
  2. The condition tests whether the index has reached the last item of the array which is array.length - 1;
  3. i++ increments the index by 1
  */
  for (let i = 0; i <= arrLength - 1; i++) {
    console.log(variableArray[i]);
  }
}

let greeting = "Hello";
let myNum = 1000;
let bigNum =
  9843827581636835686494617638746761864183875423958935893859350302302329059398438275816368356864946176387467618641838754239589358938593503023023290593984382758163683568649461763874676186418387542395893589385935030230232905939843827581636835686494617638746761864183875423958935893859350302302329059398438275816368356864946176387467618641838754239589358938593503023023290593n;
let rich = false;
let nullValue = null;
let placeholder;
let myObject = { name: "Satoshi", surname: "Nakamoto" };
let myArr = [1, 2, 3, 4, 5];

let arrayOfVariables = [
  greeting,
  myNum,
  bigNum,
  rich,
  nullValue,
  placeholder,
  myObject,
  myArr,
]; // this array contains all the variables created above
outputVariables(arrayOfVariables); // calls the function with the arrayOfVariables argument
```

---

### `Using Operators`

Create a variable and update it using assignment operators. Then create another variable taking as a value the result of a operated upon with a mathematical operator. Then test it using a comparison operator, and finally create an if-else block to test it using logical operators.

Solution:

```js
let a = 10;
a *= 10;

let b = a / 5;

let testAB = a === b;
console.log(testAB);

if (a > b) || (a < b) {
  console.log("a is: ", a);
  console.log("b is: ", b);
  console.log("And a is not equal to b");
}
```

---

### `Creating a Block with a Function`

Create a simple function with code in its block and execute it.

Solution:

```js
function greeter() {
  console.log("Hello World");
}

greeter();
```

---

### `Conditionals`

Create a conditional for any purpose you like.

Solution:

```js
function greetPerson(name) {
  if (name === "Satoshi") {
    console.log("Thanks for everything, Satoshi!");
  } else if (name === "Vitalik") {
    console.log("Move Ethereum back to Proof-of-Work, Vitalik!");
  } else {
    console.log("Hey", name + "!", "learn and HODL!");
  }
}

let personA = "Satoshi";
let personB = "Vitalik";
let personC = "John";

greetPerson(personA);
greetPerson(personB);
greetPerson(personC);
```

---

### `The Ternary Operator`

Ternary operators are a convenient way of creating a conditional. Create code with a conditional expressed with a ternary operator.

Solution:

```js
let name = "Satoshi";
name === "Satoshi"
  ? console.log("Thanks for everything,", name)
  : console.log("Learn and HODL,", name);
```

---

### `Create a Countdown Meter with a While-Loop`

Create a countdown meter with a while-loop.

Hints:

1. For this exercise, you will need to create a variable to track the state of the countdown;
1. A while-loop that tests for it.

Solution:

```js
function countdown(startNum) {
  while (startNum >= 0) {
    console.log(startNum);
    startNum--; // decreases the startNum variable by 1
  }
}

countdown(100);
```

---

### `Create a Countdown Meter with a Do...While-Loop`

Now modify the previous code to achieve the same goal with a do...while loop. **Note:** changing the code without changing its functionality is called "refactoring".S

Solution:

```js
function countdown(startNum) {
  do {
    console.log(startNum);
    startNum--; // decreases the startNum variable by 1
  } while (startNum >= 0);
}

countdown(10);
```

---

### `Refactor the Countdown Meter to Use a For-Loop`

For-loops in javascript are usually confusing for new programmers as they use syntax that at first glance looks intimidating. Nonetheless, they are an essential part of the programmer's toolkit so let's refactor the countdown meter code to use a for-loop.

Solution:

```js
function countdown(startNum) {
  for (let i = startNum; i >= 0; i--) {
    console.log(i);
  }
}

countdown(10);
```

---

### `Returning Values from a Function`

Create a function that returns a value to a variable to which the function is assigned.

Hints:

1. Return the value generated by your function using the `return` keyword.

Solution:

```js
function multiplyNums(a, b) {
  return a * b;
}

let x = 5;
let y = 10;
let z = multiplyNums(x, y);
console.log(z);
```

### `Find All Even Numbers in a Range`

Write a program that will take two numbers (such as 1000 and 3000) and find all such numbers between those two numbers (both included) such that each digit of the number is an even number. Put each even number in an array and return that array to a variable to which you have assigned the function carrying out the work.

Hints:

1. Use a function for this;
1. You will need a for-loop that loops over every number in the range;
1. To test for even numbers, use the `%` (modulo) operator. A number divided by 2 by means of the modulo number leaves no remainder, so that number is an even number;
1. To add items to an array, use this syntax: array.push(item).

Solution:

```js
function findEvens(startNum, endNum) {
  let myArr = []; // declare the variable and initialize it to an empty array;
  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 === 0) {
      myArr.push(i);
    }
  }
  return myArr;
}

let a = 1;
let b = 20;
let c = findEvens(a, b);
console.log(c);
```

---

---

## `Adding JS to the Web Page`

Javascript in the browser is a very different matter from javascript in node. In the browser, you need to connect the document object of the web page, and its elements, to the code, and then run code on it. This will require code that you did not cover in the [Basics of JavaScript](/javascript/javascript.md) notes. For this reason, some of the required code will be provided for you.

---

### `Setting up the Basic Code`

In the folder containing your index.html and styles.css, you should have a file called script.js. In that file, paste the following code:

```js
document.addEventListener("DOMContentLoaded", function () {
  // Get form and input elements
  let form = document.querySelector("form");
  let fahrenheitInput = document.getElementById("fahrenheit");
  let celsiusInput = document.getElementById("celsius");

  form.addEventListener("submit", function (event) {
    // Prevent traditional form submission
    event.preventDefault();
  });

  /*

The rest of your code will go here

*/

  // code to reset the values in the inputs to empty
  // Get the clear button element
  let clearButton = document.getElementById("clearButton");

  // Add event listener to the clear button
  clearButton.addEventListener("click", function () {
    // Clear the input values
    fahrenheitInput.value = "";
    celsiusInput.value = "";
  });
});
```

---

### `Creating a Function to Compute Celsius from Fahrenheit`

Define a function called computeCelsius:

- This function should take a parameter called fahrenheit;
- it should create a variable called celsius that assigns the result of an expression converting the fahrenheit parameter to celsius;
- Round the celsius variable to 2 decimal places and assign it to the global variable celsiusInput.value;
- Finally paste it under the form.addEventListener() function in the code template provided in the step above.

Hints:

1. The parameter fahrenheit is obtained from the browser that submits it as a string type. You need to convert the string parameter fahrenheit to a number type. To do this, use the function parseFloat();
1. The simplified formula to convert fahrenheit to celsius is: (fahrenheit - 32) / 1.8;
1. To round the celsius variable to 2 decimal places, append the .toFixed(2) method to celsius. This works because celsius is a number type and .toFixed() is a function that belongs to number types.

Solution:

```js
document.addEventListener("DOMContentLoaded", function () {
  // Get form and input elements
  let form = document.querySelector("form");
  let fahrenheitInput = document.getElementById("fahrenheit");
  let celsiusInput = document.getElementById("celsius");

  form.addEventListener("submit", function (event) {
    // Prevent traditional form submission
    event.preventDefault();
  });

  function computeCelsius(fahrenheit) {
    // using parsefloat() to convert string to float
    let celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    celsiusInput.value = celsius.toFixed(2); // Using toFixed(2) to round to 2 decimal places
  }

  // code to reset the values in the inputs to empty
  // Get the clear button element
  let clearButton = document.getElementById("clearButton");

  // Add event listener to the clear button
  clearButton.addEventListener("click", function () {
    // Clear the input values
    fahrenheitInput.value = "";
    celsiusInput.value = "";
  });
});
```

---

### `Creating a Function to Compute Fahrenheit from Celsius`

Define a function called computeFahrenheit:

- This function should take a parameter called celsius;
- it should create a variable called fahrenheit that assigns the result of an expression converting the celsius parameter to fahrenheit;
- Round the fahrenheit variable to 2 decimal places and assign it to the global variable fahrenheitInput.value;
- Finally paste it under the computeCelsius() function in the rest of your code.

Hints:

1. This function is pretty much the same as the computeCelsius() function so you can proceed in exactly the same manner;
1. The simplified formula to convert celsius to fahrenheit: celsius \* 1.8 + 32;

Solution:

```js
document.addEventListener("DOMContentLoaded", function () {
  // Get form and input elements
  let form = document.querySelector("form");
  let fahrenheitInput = document.getElementById("fahrenheit");
  let celsiusInput = document.getElementById("celsius");

  form.addEventListener("submit", function (event) {
    // Prevent traditional form submission
    event.preventDefault();
  });

  function computeCelsius(fahrenheit) {
    // using parsefloat() to convert string to float
    let celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    celsiusInput.value = celsius.toFixed(2); // Using toFixed(2) to round to 2 decimal places
  }

  function computeFahrenheit(celsius) {
    // using parsefloat() to convert string to float
    let fahrenheit = parseFloat(celsius) * 1.8 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2); // Using toFixed(2) to round to 2 decimal places
  }

  // code to reset the values in the inputs to empty
  // Get the clear button element
  let clearButton = document.getElementById("clearButton");

  // Add event listener to the clear button
  clearButton.addEventListener("click", function () {
    // Clear the input values
    fahrenheitInput.value = "";
    celsiusInput.value = "";
  });
});
```

---

### `Adding Input Validation`

To use our converter, the user will insert a value in either the fahrenheit or celsius field and click on the convert button. However, what happens if the user inputs values into both fields? What value do you want the script to convert? In planning this page, the decision was taken that if the user fills both fields with values, the code would convert only the fahrenheit value to celsius. To achieve this, we need to use a conditional.

Write a loop to compute values depending on which inputs the user has supplied:

- If the user has supplied both inputs OR if the user has supplied only the fahrenheit value, convert the fahrenheit input to celsius;
- else if the user has supplied only the celsius value, convert it to fahrenheit.
- Finally, paste the code under the computeFahrenheit function.

Hints:

1. The values are in the global variables fahrenheitInput.value and celsiusInput.value.

Solution:

```js
document.addEventListener("DOMContentLoaded", function () {
  // Get form and input elements
  let form = document.querySelector("form");
  let fahrenheitInput = document.getElementById("fahrenheit");
  let celsiusInput = document.getElementById("celsius");

  form.addEventListener("submit", function (event) {
    // Prevent traditional form submission
    event.preventDefault();

    function computeCelsius(fahrenheit) {
      // using parsefloat() to convert string to float
      let celsius = (parseFloat(fahrenheit) - 32) / 1.8;
      celsiusInput.value = celsius.toFixed(2); // Using toFixed(2) to round to 2 decimal places
    }

    function computeFahrenheit(celsius) {
      // using parsefloat() to convert string to float
      let fahrenheit = parseFloat(celsius) * 1.8 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2); // Using toFixed(2) to round to 2 decimal places
    }

    // Check which input has a value
    if (
      // if both the fahrenheit and celsius inputs or the fahrenheit input only have values, the code will convert only the fahrenheit value to celsius
      (fahrenheitInput.value && celsiusInput.value) ||
      fahrenheitInput.value
    ) {
      let fahrenheit = fahrenheitInput.value;
      computeCelsius(fahrenheit);
    } else if (celsiusInput.value) {
      // otherwise if only the celsius input has a value, the code will convert it to fahrenheit
      let celsius = celsiusInput.value;
      computeFahrenheit(celsius);
    }
  });

  // code to reset the values in the inputs to empty
  // Get the clear button element
  let clearButton = document.getElementById("clearButton");

  // Add event listener to the clear button
  clearButton.addEventListener("click", function () {
    // Clear the input values
    fahrenheitInput.value = "";
    celsiusInput.value = "";
  });
});
```

---
