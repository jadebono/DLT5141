# **Basic Concepts of Computer Programming using JavaScript**

[Return to main page](../README.md)

**Note:** This is a very basic introduction to fundamental concepts of programming. The goal of this introduction is to give you a basic familiarity with the elements and processes that constitute programming.

## `Table of Contents`

- [Introduction to Javascript](#introduction-to-javascript)
- [Installing Node](#installing-node)
- [Hello World](#hello-world)
- [Variables](#variables)
- [Types](#types)
- [Operators](#operators)
- [Conditionals](#conditionals)
- [Installing Node](#installing-node)

## `Introduction to JavaScript`

JavaScript (JS) is a lightweight interpreted programming language best known as the scripting language for Web pages. With javascript you can manipulate the elements of a web page to create various effects.

However, Node.js is a cross-platform JavaScript runtime environment that allows developers to build server-side and network applications with JavaScript. Once you install Node, you will be able to build applications with javascript that run independently from web pages.

For the purposes of this component of the course, we'll be using node to deliver the basic concepts of programming and experiment with them.

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
touch myfile.js # assuming that you are on Linux or MacOS
node myfile.js
```

## `Hello World`

Traditionally, the first exercise in programming is to print out the phrase "Hello World" to terminal. In javascript, to print out data to terminal, we use the console.log() method. Console is an object provided by the browser's or node's environment that provides a number of methods (functions forming part of a library or framework) to output data to the browser's console or to the terminal in Node. To use console.log() just put your data in the parentheses of the method:

```js
console.log("Hello World!");
```

## `Variables`

- Definition and purpose.
- Declaring and initializing variables.

## `Types`

- Data types: `string`, `number`, `boolean`, `null`, `undefined`, `object`, and `array`.

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
