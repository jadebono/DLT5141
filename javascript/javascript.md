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
