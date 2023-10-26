# **Basic Concepts of Computer Programming using JavaScript**

[Return to main page](../README.md)

**Note:** This is a very basic introduction to fundamental concepts of programming. The goal of this introduction is to give you a basic familiarity with the elements and processes that constitute programming.

---

## `Table of Contents`

- [Introduction to Javascript](#introduction-to-javascript)
- [Installing Node](#installing-node)
- [Hello World](#hello-world)
- [Variables](#variables)
- [Types](#types)
- [Operators](#operators)
- [Conditionals](#conditionals)
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
console.log(name); // prints out "undefined" because the variable it not initialized

name = "Satoshi"; // initializes the variable. You do not need the var keyword because the variable has already been declared
console.log(name); // prints out "Satoshi" because the variable has now been initialized

name = "Hal"; // updates the name variable
console.log(name); // now prints out "Hal" because the value of the variable has been updated
```

```js
var name = "Satoshi";
let surname = "Nakamoto";
const MYNUM = 21;

console.log(name); // prints "Satoshi"
console.log(surname); // prints "Nakamoto"
console.log(MYNUM); // prints 21
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
```

- `boolean` - represent a true or false value, used for logical operations:

```js
let myBoolean = true;
let testNum = 4 > 12; // value of testNum is false
```

- `null` - is a type that has exactly one value: null. It represents the intentional absence of any object value. It is used to represent an empty or absent value intentionally.

```js
let nullVariable = null;
console.log(nullVariable); // prints out "null"
```

- `undefined` - is a value that represents a variable that has been declared but has not yet been assigned a value. It is the default value assigned to variables that are declared but not initialized;

```js
let n;
console.log(n); // prints out "undefined"
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

console.log(myObject); // prints out { name: 'Satoshi', numberOfBitcoins: 21000000, bitcoinLaunch: 2009 }
console.log(myObject.name); // using dot notation to print out "Satoshi"
```

- `array` - an array is a special kind of object used to store multiple values in a single variable. It can hold more than one value (of any type) at a time, with each value accessible by a numerical index. The index starts from 0. Individual items in an array can be accessed using the index, for example array[0] returns the FIRST item in the array:

```js
let BITCOINMAXSUPPLY = 21000000;
let myArray = ["Satoshi", "Nakamoto", 2009, BITCOINMAXSUPPLY, true];
console.log(myArray); // prints out [ 'Satoshi', 'Nakamoto', 2009, 21000000, true ]
console.log(myArray[0]); // prints out "Satoshi"
console.log(myArray[4]); // prints out 4
```

**Notes**:

- While data types are usually assigned to variables and manipulated as such, you can also manipulate them directly:

```js
let greeting = "Hello World";
console.log(greeting);

console.log("Hail, my friend!");

let addTwoEvens = 2 + 4;
console.log(addTwoEvens);

console.log(2 + 4);
```

- Trying to manipulate different types in the same operation is a bad idea and will return errors or unexpected outcomes!

```js
let impossibleOperation = "my friend" / 2.3; // tries to initialize impossibleOperation with the dividend of a string and a number
console.log(impossibleOperation); // prints out NaN (not a number)
```

```js
let str = "hello";
let num = 10;
console.log(str + num); // prints out hello10 of type string
```

- Be careful when you update variables. Irrespective of the original type of a variable, you can easily change it to a value of another type. This may create problems if this was not your intention.

```js
let myNum = 10; // myNum declared and initialized with the number type of 10
console.log(myNum / 2); // prints out 5
myNum = "Hello"; // myNum updated with the string type of "10"
console.log(myNum / 2); // prints out NaN (not a number)
```

---

## `Operators`

- Arithmetic operators: `+`, `-`, `*`, `/`, `%`
- Comparison operators: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- Logical operators: `&&`, `||`, `!`

## `Conditionals`

- `if`, `else if`, `else`.
- Ternary operator.

## `Loops`

- `for`, `while`, `do...while`.
- Loop control with `break` and `continue`.

## `Functions`

- Definition and purpose.
- Declaring and calling functions.
- Parameters and return values.
