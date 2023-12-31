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

While you can create a table with pure html, modern css gives you the far more flexible grid. Target your html `<div>` with the class of "grid-container". Give it a display of grid, divide the container into two columns of equal width. Set a gap of 20px between the columns. Center the content both vertically and horizontally.

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

Target your html `<div>` with the class "wine-flex". Give it a display of flex, a justify-content of space-between. Set the flex to wrap, and give it a gap between elements of 20px.

Solution:

```css
.wine-flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
```

---

## `Question 13 - Styling the Wine Cards`

Your `<div>` with the class "wine-flex" has six descendant `<div>` elements with a class of "wine-card". Target the "wine-card" and give it a flex of 1 1 calc(33.33% - 20px). This will ensure that the card grows or shrinks to take up available space and that it will take up 33% of the screen after deducting 20px space between the cards. Give the element a background color of #eceff1 and rounded corners of 10px. Finally set the overflow to hidden.

Solution:

```css
.wine-card {
  flex: 1 1 calc(33.33% - 20px);
  background-color: #eceff1;
  border-radius: 10px;
  overflow: hidden;
}
```

---

## `Question 14 - Styling the image in the Wine Cards`

The `<div>`with the class "wine-card has a `<figure>` element with an `<img>` tag. Select this `<img>` tag using descendant selectors and give it a width of 100% and a display of block.

Solution:

```css
.wine-card figure img {
  width: 100%;
  display: block;
}
```

---

## `Question 15 - Styling the figcaption in the Wine Cards`

The `<div>`with the class "wine-card has a `<figure>` element with its own descendant `<figcaption>` element. Select this `<figcaption>` element using descendant selectors and give it a text-align of center, set the top and bottom padding to 10px, and the right and left padding to 0. Give it a background color of #009688 and a font color of #eceff1.

Solution:

```css
.wine-card figure figcaption {
  text-align: center;
  padding: 10px 0;
  background-color: #009688; /* Teal */
  color: #eceff1;
}
```

---

## `Question 15 - Styling the iframe`

Select the `<iframe>` element and give it a width of 100% and a height of 400px.

Solution:

```css
iframe {
  width: 100%;
  height: 400px;
}
```

---

## `Question 16 - Setting up a Media Query for Screens of 768px`

Let us style the element with the ingredient class for screens with a max width of 768px. Create a media query. In this media query, we're going to make the element with the class of main-image element stack under the one with the calss of ingredients. Nest a style rules for the `grid-container` and its children elements. Give the element with the class of grid-container a display of grid, make it a grid of one column, and align its items vertically and horizontally in the center. Then set the margin of the element with the class of ingredients to auto. Do the same to the element with the class of main-image and also give it a height of auto.

Solution:

```css
@media (max-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }

  .ingredients {
    margin: auto;
  }
  .main-image {
    height: auto;
    margin: auto;
  }
}
```

---

## `Question 17 - Setting up a Media Query for Screens of 480px`

Set up a media query for screens with a max width of 480px. Select the elements with the grid-container class, the wine-flex class and the wine card class. Give the grid-container a grid-template-columns of 1fr. Give the wine-flex a flex-direction of column and give the wine-card a flex of 1 1 100%.

Solution:

```css
@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr; /* Use only one column for small screens */
  }

  .wine-flex {
    flex-direction: column;
  }

  .wine-card {
    flex: 1 1 100%;
  }
}
```

---
