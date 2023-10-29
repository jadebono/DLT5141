# **Basic Concepts of Computer Programming using JavaScript**

[Return to main page](../README.md)

**Note:** This is a very basic introduction to fundamental concepts of programming. The goal of this introduction is to give you a basic familiarity with the elements and processes that constitute programming.

---

## `Table of Contents`

- [Introduction to Javascript](#introduction-to-javascript)
- [Installing Node](#installing-node)
- [Comments](#comments)
- [Hello World](#hello-world)
- [Variables](#variables)
- [Types](#types)
- [Operators](#operators)
- [Blocks](#blocks)
- [Conditionals](#conditionals)
- [Loops](#loops)
- [Functions](#functions)

---

## `Introduction to JavaScript`

JavaScript (JS) is a lightweight interpreted programming language best known as the scripting language for Web pages. With javascript you can manipulate the elements of a web page to create various effects.

However, Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript. Once you install Node, you will be able to build applications with javascript that run independently from web pages.

For the purposes of this component of the course, we'll be using node to deliver the basic concepts of programming and experiment with them.

---

## `Installing Node`

Go to the Node website:

[Download Node](https://nodejs.org/en)

Download and install Node. Download the LTS (Long Term Support) not the Current version as the LTS is the most stable. Node comes with npm, the node package manager that allows you to install node packages. To test the installation:

```bash
node -v
npm -v
```

With node, you will be able to run javascript files in your terminal. To do so:

1. In your IDE, create a file ending in .js, such as myfile.js;
1. Write some code in the file;
1. In your terminal window at the bottom of your ide, type node myfile.js to run it:

```bash
touch myfile.js # assuming that you are using Linux or MacOS
node myfile.js
```

---

## `Comments`

A programming language has a commenting facility to enable the programmer to add comments in the code to add notes and explanations for later reference or other coders. Javascript uses forward slashes `//` for single line comments or `/* */` for block (multiline) comments. Javascript ignores all text following `//` and all text within `/* */`:

```js
// this line outputs the phrase "Hello World"
console.log(5); // the code will ouput 5

/* This is a block comment. It can span multiple lines.
  Javascript will ignore everything between the symbols
  enclosing the block comment. */
console.log("Hi!"); // the code will output "Hi!"
```

---

## `Hello World`

Traditionally, the first exercise in programming is to print out the phrase "Hello World" to terminal. In javascript, to print out data to terminal, we use the console.log() method. Console is an object provided by the browser's or node's environment that provides a number of methods (functions forming part of a library or framework) to output data to the browser's console or to the terminal in Node. To use console.log() just put your data in the parentheses of the method:

```js
console.log("Hello World!");
```

**Note:** in javascript, lines of code (expressions and statements) generally need to be terminated with `;`. Blocks (a chunk of code enclosed in curly brackets - {} ) are the exception.

```js
let x = true; // terminated with ;
if (x === true) {
  console.log("x is true!"); // terminated with ;
} // not terminated with ;
```

---

## `Variables`

- Definition and purpose.

Variables are entities in programming used to store data that can be manipulated throughout a program. They act like containers that hold values which can be changed during the execution of a program. In JavaScript, variables can hold different types of values such as numbers, strings, objects, and more, which makes them essential for performing operations, making decisions, and controlling the flow of a program.

- Declaring and initializing variables

Javascript has three keywords for creating variables:

1. `var` - var allows you declare variables anywhere you like, which can cause a number of problems;
1. `let` - let allows you to declare and use variables only within a block of curly brackets {} (block scope);
1. `const` - const too is block-scoped but you cannot update the value of a variable declared and initialized with const. It effectively becomes a constant.

To create a variable, you declare it with a keyword. You can then initialize it by giving it a value, or you can initialize later when you need it. To initialize a variable assign a value to it using the `=` operator and a value on the right-hand side. You can also update variables created using both `var` and `let` (in the same block scope) simply by assigning a new value to them.

**Note:** for a number of reasons, modern javascript usage prefers creating variables using `let` within a particular scope. Furthermore, you can create new variables with the same variable names in different scopes using `let` and `const`

Declaring a variable and initializing it later:

```js
var name; // declares variable but does NOT initialize it
console.log(name); // outputs "undefined" because the variable it not initialized

name = "Satoshi"; // initializes the variable. You do not need the var keyword because the variable has already been declared
console.log(name); // outputs "Satoshi" because the variable has now been initialized

name = "Hal"; // updates the name variable
console.log(name); // now outputs "Hal" because the value of the variable has been updated
```

```js
var name = "Satoshi";
let surname = "Nakamoto";
const MYNUM = 21;

console.log(name); // outputs "Satoshi"
console.log(surname); // outputs "Nakamoto"
console.log(MYNUM); // outputs 21
```

- Variable naming conventions

You can name your javascript variables pretty much anything you want as long as it starts with a letter or an underscore. There are however a few conventions that should be respected.

- Make your variable names descriptive of the value you expect to store inside it:

```js
let myEvenNumber = 2; // this is descriptive
let myOddNumber = "Hello World!"; // this is not descriptive
```

- Use camelcase in which the first letter of every individual word (except the first one) is in uppercase:

```js
let litecoinMaximumSupply = 84000000; // this is camelcase
let litecoin_maximum_supply = 84000000; // this is snakecase, it works but is not conventional javascript style
```

- constant variables should be entirely uppercase:

```js
const BITCOINMAXSUPPLY = 21000000;
```

---

## `Types`

Programming languages assign properties called "types" to their constructs such as variables. Knowing the type of the data you are manipulating is essential in getting your programs to work correctly. Javascript has these primitive data types (although you can create your own):

- `string` - a representation of characters that have to be inputted in between inverted commas "". Note that anything represented within inverted commas becomes a string, even numbers!

```js
let thisLanguage = "Javascript";
let numberString = "100"; // this is a string type not a number type!
```

- `number` - can be either an integer (in decimal, hexadecimal, octal, and binary) or floating point literal. Javascript's `number` type is a 64-bit floating point, which provides a precision of up to 15 decimal places. As far as integers are concerned, the largest safe integer `number` can represent is 9,007,199,254,740,991 and the smallest is -9,007,199,254,740,991. If you need bigger/smaller numbers, use the bigInt type (created by appending n to the number)

```js
let aNumber = 5438145; // decimal integer number type
let aFloat = 3.45621; // decimal float number type
```

- `bigint` - Numbers outside the range of -9,007,199,254,740,991 to 9,007,199,254,740,991 need to be represented using the `bigInt` type. To do so, simply append n to your number:

```js
let veryBigNumber = 1234567890123456789012345678901234567890n; // this is a bigInt type NOT a number type
console.log(veryBigNumber); // outputs 1234567890123456789012345678901234567890n
```

- `boolean` - represent a true or false value, used for logical operations:

```js
let myBoolean = true;
let testNum = 4 > 12; // value of testNum is false
```

- `null` - is a type that has exactly one value: null. It represents the intentional absence of any object value. It is used to represent an empty or absent value intentionally.

```js
let nullVariable = null;
console.log(nullVariable); // outputs null
```

- `undefined` - is a value that represents a variable that has been declared but has not yet been assigned a value. It is the default value assigned to variables that are declared but not initialized;

```js
let n;
console.log(n); // outputs "undefined"
```

- `object` - is a collection of key-value pairs, where each key is a unique string and each value can be of any data type, including other objects or functions. It is enclosed in curly brackets. You can access data in an object using the dot notation like this object.key.

```js
let BITCOINMAXSUPPLY = 21000000;
// declaring and initializing the object
let myObject = {
  name: "Satoshi", // the value here is a string;
  numberOfBitcoins: BITCOINMAXSUPPLY, // the value here is a constant variable
  bitcoinLaunch: 2009, // the value here is a number
};

console.log(myObject); // outputs { name: 'Satoshi', numberOfBitcoins: 21000000, bitcoinLaunch: 2009 }
console.log(myObject.name); // using dot notation to print "Satoshi"
```

- `array` - an array is a special kind of object used to store multiple values in a single variable. It can hold more than one value (of any type) at a time, with each value accessible by a numerical index. The index starts from 0. Individual items in an array can be accessed using the index, for example array[0] returns the FIRST item in the array:

```js
let BITCOINMAXSUPPLY = 21000000;
let myArray = ["Satoshi", "Nakamoto", 2009, BITCOINMAXSUPPLY, true];
console.log(myArray); // outputs out [ 'Satoshi', 'Nakamoto', 2009, 21000000, true ]
console.log(myArray[0]); // outputs "Satoshi"
console.log(myArray[4]); // outputs true
```

**Notes**:

- While data types are usually assigned to variables and manipulated as such, you can also manipulate them directly:

```js
let greeting = "Hello World";
console.log(greeting); // outputs "Hello World"

console.log("Hail, my friend!");

let addTwoEvens = 2 + 4;
console.log(addTwoEvens); // outputs 6

console.log(2 + 4); // outputs 6
```

- Trying to manipulate different types in the same operation is a bad idea and will return errors or unexpected outcomes!

```js
let impossibleOperation = "my friend" / 2.3; // tries to initialize impossibleOperation with the dividend of a string and a number
console.log(impossibleOperation); // outputs NaN (not a number)
```

```js
let str = "hello";
let num = 10;
console.log(str + num); // outputs "hello10" of type string
```

- Be careful when you update variables. Irrespective of the original type of a variable, you can easily change it to a value of another type. This may create problems if this was not your intention.

```js
let myNum = 10; // myNum declared and initialized with the number type of 10
console.log(myNum / 2); // outputs 5
myNum = "Hello"; // myNum updated with the string type of "10"
console.log(myNum / 2); // outputs NaN (not a number)
```

---

## `Operators`

Operators in JavaScript are special symbols or keywords that are used to perform operations on operands. They are the building blocks of JavaScript programs, allowing you to manipulate values, compare them, and perform various other operations. There are three different categories of operators:

1. Assignment Operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`;
1. Arithmetic operators: `+`, `-`, `*`, `/`, `%`;
1. Comparison operators: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`;
1. Logical operators: `&&`, `||`, `!`;

### `1. Assignment Operators`

Assignment operators assign values to a variable:

- `=` used to assign a value to a variable:

```js
let n = 10;
console.log(n); // outputs 10
```

- `+=` adds a value to a variable:

```js
let n = 10;
n += 10; // adds 10 to n
console.log(n); // outputs 20
```

- `-=` subtracts a value from a variable:

```js
let n = 100;
n -= 10; // subtracts 10 from n
console.log(n); // outputs 90
```

- `*=` multiplies a variable by a value:

```js
let n = 10;
n *= 10; // multiplies n by 10
console.log(n); // outputs 100
```

- `/=` divides a variable by a value:

```js
let n = 100;
n /= 2; // divides n by 2
console.log(n); // outputs 50
```

- `%=` divides a variable by a value and assigns the remainder to that variable:

```js
let n = 10;
n %= 3; // n = the remainder of 10 / 3
console.log(n); // outputs 1
```

### `2. Arithmetic Operators`

Arithmetic operators carry out arithmetic operations:

- `+` adds two numbers:

```js
let n = 10 + 5;
console.log(n); // outputs 15
```

- `-` subtracts a number from a number:

```js
let n = 100 - 10;
console.log(n); // outputs 90
```

- `*` multiplies a number by another number:

```js
let n = 10 * 10;
console.log(n); // outputs 100
```

- `/` divides a number by another number:

```js
let n = 100 / 2;
console.log(n); // outputs 50
```

- `%` is called the modulo operator that divides a number by another number and returns the remainder:

```js
let n = 10 % 3;
console.log(n); // outputs 1
```

### `3. Comparison Operators`

Comparison operators compare one value with another. Generally the comparison happens between values of the same type, but not necessarily:

- `==` is called "loose equality" and compares the values of two variables irrespective of type:

```js
let a = 5; // value 5 but type number
let b = "5"; // value 5 but type string
let c = a == b; // a is loosely equal to b: resolves to true
console.log(c); // outputs true
```

- `===` is called "strict equality" that compares the values of two variables for both value AND type:

```js
let a = 5; // value 5 but type number
let b = "5"; // value 5 but type string
let c = a === b; // a is strictly equal to b: resolves to false
console.log(c); // outputs false

let a = "and"; // value "and" of type string
let b = "and"; // value "and" of type string
let c = a === b; // a is strictly equal to b: resolves to true
console.log(c); // outputs true
```

- `!=` is "not equal to" and compares for difference the values of two variables irrespective of type:

```js
let a = 5; // value 5 but type number
let b = "5"; // value 5 but type string
let c = a != b; // a is loosely not equal to b: resolves to false
console.log(c); // outputs false
```

- `!==` is "strict not equal to" and compares for difference the values AND types of two:

```js
let a = 5; // value 5 but type number
let b = "5"; // value 5 but type string
let c = a !== b; // a is strictly not equal to b: resolves to true
console.log(c); // outputs true

let a = "and"; // value "and" of type string
let b = "and"; // value "and" of type string
let c = a !== b; // a is strictly not equal to b: resolves to false
console.log(c); // outputs false
```

- `<` "less than":

```js
let a = 5;
let b = 10;
let c = a < b;
console.log(c); // outputs true
```

- `>` "greater than":

```js
let a = 10;
let b = 5;
let c = a > b;
console.log(c); // outputs true
```

- `<=` is the "smaller than or equal to" operator. It returns true if the left operator is smaller than or equal to the right operator:

```js
let a = 2;
let b = 4;
let c = 2;
let d = 1;
console.log(a <= b); // outputs true
console.log(a <= c); // outputs true
console.log(a <= d); // outputs false
```

- `>=` is the "greater than or equal to" operator. It returns true if the left operator is greater than or equal to the right operator:

```js
let a = 10;
let b = 5;
let c = 10;
let d = 100;
console.log(a >= b); // outputs true
console.log(a >= c); // outputs true
console.log(a >= d); // outputs false
```

### `4. Logical Operators`

Logical operators are used to perform logical operations on one or more operands and return a boolean result based on the logic of the operation:

`&&`, `||`, `!`

**Note:**

- Make sure that you carry out operations on values of the same type since javascript has a facility called "type coercion" through which values are converted from one data type to another automatically. While coercion has its uses, it can lead to unpredictable code so it is better to avoid these situations by ensuring that you are operating on values of the same type.

```js
let exampleOne = 10 + "5"; // attempts to add a number type to a string type
console.log(exampleOne); // prints out the string "105" as it coerces the number into a string and concatenates the two strings

let exampleTwo = 10 == "10"; // uses loose equality operator on a number and a string
console.log(exampleTwo); // prints out true
```

---

## `Blocks`

In JavaScript, a block is a collection of one or more statements enclosed by curly braces {}. A block groups together statements so they are treated as one unit, providing structure to your code. Blocks are commonly used with control flow statements like if, for, while, etc., to group a set of statements to be executed together based on a condition or loop. They are also used to define the code of functions.

example:

```js
if (true) {
  // This is a block
  console.log("The condition is true");
}
```

Code in curly braces, called a `block` is isolated from the main sequence of the code and is only executed sequence flows in its direction. Blocks are used to keep the code well organized, efficient and concise as it enables you to put reusable code into a single block and call it when necessary instead of writing it out every time it is needed.

---

## `Conditionals`

Conditionals are constructs that allow different code paths to be executed based on certain conditions. In javascript code is executed sequentially from top to bottom, in the order they appear in the program but when the subsequent code is an if-block, then it forks into multiple paths depending on the outcome of the logical condition you specify. The main keywords/operators are these:

- `if`, `else if`, `else`.
- Ternary operator.

The basic syntax of conditionals is this:

```js
if (condition) {
  // do something
} else if (condition) {
  //do something else
} else {
  //do something else
}
```

An example is this:

```js
let x = 10;
if (x > 10 /* this is the logical condition to be satisfied */) {
  //if x > 10 do something here
  console.log("x is greater than 10");
  //else if x > 10 do something else here
} else if (x === 10) {
  //else do something else here
  console.log("x is 10");
} else {
  console.log("x must be smaller than 10!");
}
```

In the example above, the code forks down three different paths when it encounters the if-else block.

The ternary operator is a shorthand way of using if-else. The syntax is:

condition ? expressionIfTrue : expressionIfFalse;

```js
let age = 18;
age >= 18 // condition to be met
  ? console.log("You may order a drink") // code executed if condition is met
  : console.log("You're too young to drink alcoholic drinks"); // code executed if condition is NOT met
```

**Note:**

- You don't need to use all conditional keywords when setting up a condition. If, if-else, and if conditionals are all valid. Examples:

```js
let a = "hello";
// this if-else block will output "Hello to you too!"
if (a === "hello") {
  console.log("Hello to you too!");
} else {
  console.log("Hello, mate!");
}

let b = "world";
// this if-block will output "Hello world!"
if (b === "world") {
  console.log("Hello world!");
}
```

---

## `Loops`

Loops allow for the repeated execution of a block of code as long as a specified condition is met. Common looping constructs are:

1. `while`
1. `do...while`
1. `for`

- The `while` loop keeps a block of code looping while the while condition prevails. The basic syntax is:

```js
while (condition) {
  // code block to be executed
}
```

example:

```js
let result = ""; // set result to an empty string
let i = 1; // set i to 1
while (i <= 5) {
  // while i is smaller than or equal to 5 repeat the following block of code
  result += i + " "; // concatenate the value of i with an empty space to the string variable i
  i += 1; // add 1 to the number variable i
}
console.log(result); // outputs "1 2 3 4 5"
```

- The `do...while` loop is very similar to the while loop except when the condition is checked. With the while loop, the condition is checked at the beginning of the loop. With the do...while loop the condition is checked at the end. This means that a while loop may not execute at all if the condition is false to start off with. With the do...while loop, the code will execute at least once even if the condition is false. The syntax of the `do... while` loop is this:

```js
do {
  // code block to be executed
} while (condition);
```

example:

```js
let result = ""; // set result to an empty string
let i = 0; // set i to 0

do {
  // start the looping code irrespective of the condition
  i += 1; // add 1 to the number variable i
  result += i + " "; // concatenate the value of i with an empty space to the string variable i
} while (i < 5); // check the condition and repeat the condition until it evaluates to true

console.log(result); // Output: "1 2 3 4 5 "
```

- The `for` loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly. It's commonly used in many programming languages including JavaScript. A for loop is characterized by three expressions and a statement or block of statements to be executed within the loop:

```js
for (initialExpression; condition; incrementExpression) {
  // code block to be executed
}
```

1. Initial Expression: This part is executed only once, at the beginning of the loop. It's often used to create a variable to control the loop.
1. Condition: This expression is checked before every iteration. If the condition evaluates to true, the loop continues; if it evaluates to false, the loop exits.
1. Increment Expression: This part is executed at the end of every iteration. It's often used to update the loop control variable.

Example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
/*
outputs:
0
1
2
3
4
*/
```

The `break` and `continue` keywords provide ways of controlling the flow of the loop. The break keyword is used to break out of the loop if a certain condition is met. The continue keyword skips the current loop if a certain condition is met. To use break and continue, you need to combine them with if blocks:

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  console.log(i); // ouputs the current value of i
}
// Output: 0 1 2 3 4
```

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // outputs the current value of i
}
// Output: 1 3 5 7 9
```

---

## `Functions`

Functions are fundamental building blocks in JavaScript, allowing you to define reusable code, organize your code into manageable pieces, and abstract away complex operations.

- Functions are defined using the function keyword, followed by a name, a list of parameters (placeholders for variables), and a block of code. More than one parameter are separated by a comma `,`. Functions are then called by invoking the function with the arguments in parentheses. **Note:** terminology that frequently confuses students is the difference between a parameter and an argument. A parameter is the placeholder for variables in the function definition. Arguments are the actual variables supplied when calling the function. The argument does **not** need to have the same name as the parameter.

```js
function greeting(name /*this is called a parameter */) {
  console.log("Hello", name);
}

let bitcoinFounder = "Satoshi";
greeting(bitcoinFounder /*this is called an argument here */); // outputs "Hello Satoshi"

/* reusing the function with a different argument */
let ethereumFounder = "Vitalik";
greeting(ethereumFounder /*this is called an argument here */); // outputs "Hello Vitalik"
```

- Functions can return values that can then be used in other parts of your code instead of just executing a sequence of code. To do this, you assign a function to a variable, and the return keyword on the last line of the function will "return" the value computed by the function to variable to which you have assigned it.

```js
function add(a, b) {
  return a + b; // adds a and b and returns them to the variable to which the function was assigned
}

let numOne = 10;
let numTwo = 20;

let ans = add(numOne, numTwo); // assigns the sum of numOne and numTwo to ans
console.log(ans); // outputs 30

let anotherNum = 40;
let yetAnotherNum = 60;

let secondAns = add(anotherNum, yetAnotherNum);
console.log(secondAns); // outputs 100
```

- With functions that return values, you call them directly from another function. When this happens the calling function uses the return values of the function you pass it as an argument.

```js
function add(a, b) {
  return a + b;
}

console.log(add(5, 10)); // outputs 15 directly
```

- Code within a function block is encapsulated from the main code and is inaccessible to the main program. For example, variables declared in the function block are inaccessible to the main program:

```js
function areaOfCircle() {
  let radius = 10;
  let radiusSquared = Math.pow(radius, 2); // function in Math library for finding exponent
  let area = Math.PI /*value of pi in Math library */ * radiusSquared;
  return area;
}

/*
both of the following lines output errors because the variables of areaOfCircle() is not available to the main program unless the function is called and assigned to another variable accessible to the main program
*/
console.log(radius);
console.log(area);
```

---
