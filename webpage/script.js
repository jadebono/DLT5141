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
