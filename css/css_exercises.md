# `CSS Exercises`

[Return to main page](../README.md)

In the following exercises, you will build a css stylesheet that defines the appearance of the index.html file that you built for the html_exercises section of this course. You will be working on the styles.css file that you created in the same folder of your index.html.

**Note:** The solutions to these exercises are at least partly suggestions not definitive answers. You can model your answers on these solutions, but you are also free to adapt and define styles according to your own taste.

---

**Important Note**

CSS is a set of definitions comprising a collection of "properties" and "values." Each property takes a value that specifies the appearance. Properties can have multiple values. It is by choosing the right value for the targetted property that you define the appearance of your HTML elements. Example:

```css
p {
  color: blue;
  font-size: 16px;
}
```

In the above example:

- **color** and **font-size** are **properties**.
- **blue** and **16px** are the respective **values** of these properties.

---

## `Question 1 - Styling the Main Element`

Let's start with the `<main>` element. Give it a max-width, a margin with a top and bottom margin of 0 and left and right margin of auto. Give it a padding of 20x, a background color of white, a border of width 1px, solid style and a color of #eceff1``

Solution:

```css
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #eceff1;
}
```

---

## `Question 2 - Styling the Body Element`

Solution:

Set a font-family with sans-serif as a fallback. Give it a font-size of 16px (this will be the base font size). The font weight should be 400, and the line-height should be of 1.5 to make for comfortable reading. It should have no margin and no padding. Give it a background color of light grey (#eceff1) and a color of Deep Blue Grey (#455a64).

```css
body {
  font-family: "Roboto", sans-serif;
  font-size: 16px; /* Base font size */
  font-weight: 400; /* Regular font weight */
  line-height: 1.5; /* Comfortable line height for reading */
  margin: 0;
  padding: 0;
  background-color: #eceff1; /* Light Grey */
  color: #455a64; /* Deep Blue Grey */
}
```

---

## `Question 3 - Styling the h1 Element`

Give your `<h1>` a font color of Blue Grey (#607d8b). Set a font-size that is 2.5 relative to the base unit. The font-weight should be 500, and it should have only a margin bottom of 10px.

Solution:

```css
h1 {
  color: #607d8b; /* Blue Grey */
  font-size: 2.5em;
  font-weight: 500; /* Medium font weight */
  margin-bottom: 10px;
}
```

---

## `Question 4 - Styling the h2 Element`

Give your `<h2>` a font color of Blue Grey (#607d8b). Set a font-size that is 2 relative to the base unit. The font-weight should be 500, and it should have only margin-top of 40px and a margin-bottom of 15px.

Solution:

```css
h2 {
  color: #607d8b; /* Blue Grey */
  font-size: 2em;
  font-weight: 500; /* Medium font weight */
  margin-top: 40px;
  margin-bottom: 15px;
}
```

---

## `Question 5 - The Box Model`

Target the `<header>`, `<section>` and `<footer>`. Give them a margin of 20px, a padding of 20px, and a border with a width of 1px, a solid style and a color of #eceff1.

Solution:

```css
header,
section,
footer {
  margin: 20px;
  padding: 20px;
  border: 1px solid #eceff1;
}
```

---

## `Question 6 - Styling Alternative Sections`

Your index.html has a number of sections. Target the odd numbered `<section>` elements (1), (3) etc. and give them a background color of #eceff1.

Solution:

```css
section:nth-child(odd) {
  background-color: #eceff1;
}
```

---

## `Question 7 - Styling the Basic Button`

Give the `<button>` element a padding of 10px (top and bottom) and 20px (left and right). The button should have no border. Give it a background color of Teal (#009688), a font color of #eceff1. The cursor should turn into a pointer when it moves on to it. Finally, give it slightly curved corners of 5%.

Solution:

```css
button {
  padding: 10px 20px;
  border: none;
  background-color: #009688; /* Teal */
  color: #eceff1;
  cursor: pointer;
  border-radius: 5%;
}
```

---

## `Question 8 - Styling the #clearButton Element`

Your index.html document has a button with an id of clearButton. Target this element and give it a background color of red, and give it slightly curved corners of 5%.

Solution:

```css
#clearButton {
  background-color: red; /* danger */
  border-radius: 5%;
}
```

## `Question 9 - Styling Hover Effects on the Buttons`

Target both the `<button>` element and the button element with the id of "clearButton" and give them a pseudo-class of :hover. Give them a background color of #455a64, a font color of #eceff1 and a transition property with values of background-color, 0.3s and ease.

Solution:

```css
button:hover,
#clearButton:hover {
  background-color: #455a64; /* Deep Blue Grey */
  color: #eceff1;
  transition: background-color 0.3s ease;
}
```

---

## `Question 10 - Creating a Table with CSS Grid`

While you can create a table with pure html, modern css gives you the far more flexible grid. Target your html `<div>` with the class name of "grid-container". Give it a display of grid, divide the container into two columns of equal width. Set a gap of 20px between the columns. Center the content both vertically and horizontally.

Solution:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* This divides the container into two columns of equal width */
  gap: 20px;
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering */
}
```

---

## `Question 11 - Styling the Content of the Grid`

Your `<div>` with the class of grid-container contains a `<section>` with a class of ingredients and an `<img>` with a class of main-image. Target both of these elements, give them a width of 90%, a border with a width of 5px, a style of solid and a color of #607d8b.

Solution:

```css
.ingredients,
.main-image {
  width: 90%;
  border: 5px solid #607d8b;
  border-radius: 5px;
}
```

Now, target the `<section>` with a class of ingredients. Give it a background color of white (if you are having trouble getting this to apply, raise its priority using !important). Give it a padding-top of 31px, and a padding-bottom of 31px.

Solution:

```css
.ingredients {
  background-color: white !important;
  padding-top: 31px;
  padding-bottom: 31px;
}
```

Finally target the `<img>` with a class of main-image. Give it a height of auto.

Solution:

```css
.main-image {
  height: auto;
}
```

---

## `Question 12 - Creating the Flexbox for the Wine Cards`

Solution:

```css

```

---
