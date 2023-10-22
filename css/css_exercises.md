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

## `Question 1 - Styling the Body Element`

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
