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
