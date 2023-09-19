# `Basic Concepts of CSS`

[Return to main page](../README.md)

---

## `Table of Contents`

- [Introduction to CSS](#introduction-to-css)
- [CSS Attributes and Properties: A Quick Explanation](#css-attributes-and-properties-a-quick-explanation)
- [Basic Selectors and Properties](#basic-selectors-and-properties)
- [Useful Links](#useful-links)

---

## `Introduction to CSS`

CSS, which stands for Cascading Style Sheets, is a language used to describe the look and formatting of a document written in HTML. It allows web designers and developers to define colors, fonts, layout, and other aspects of document presentation.

### `Why is CSS important?`

**Separation of Content and Presentation:** CSS allows you to separate the content (HTML) from its presentation, making it easier to maintain and update.
**Consistency:** By using a single CSS file, you can ensure a consistent look and feel across multiple web pages.
**Flexibility:** CSS provides a lot of flexibility in terms of design and responsiveness.

### `How CSS fits into the web development ecosystem`

In the web development ecosystem, the trio of HTML, CSS, and JavaScript is essential. While HTML provides the structure of a webpage, CSS styles it, and JavaScript adds interactivity.

### `Types of CSS`

There are three ways to include CSS in your HTML:

1. **Inline Styles:** Directly within an HTML element using the style attribute:

```html
<p style="color: blue;">This is a blue colored text.</p>
```

2. **Internal (or Embedded) Styles:** Within the head section of an HTML document using the style tag:

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```

3. **External Styles:** Linking to an external .css file:

```html
<head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
```

**[Try it here](https://jsfiddle.net/)**

---

## `CSS Attributes and Properties: A Quick Explanation`

In CSS, when we talk about styling an element, we often use the terms "properties" and "values." However, it's easy to get these mixed up with the concept of "attributes" and "values" in HTML. Understanding these differences is crucial in understanding how HTML and CSS work individually and how they work together.

### `HTML Attributes and Values`

In HTML, elements can have attributes that **provide additional information about the element**. Each attribute has a value.

Example:

```html
<a href="https://www.mysite.com" title="Visit Example">Click here</a>
```

In the above example:

- **href** and **title** are **attributes** of the a element.
- **https://www.mysite.com** and **Visit Example** are the respective **values** of these attributes.

### `CSS Properties and Values`

In CSS, we use properties **to define how an element should appear**. Each property has a value that specifies the appearance.

Example:

```css
p {
  color: blue;
  font-size: 16px;
}
```

In the above example:

- **color** and **font-size** are **properties**.
- **blue** and **16px** are the respective **values** of these properties.

Each property has its own particular set of values (for example the color property's values are ways of defining colors).

### `Key Differences:`

- **HTML Attributes** are part of the HTML language and are added directly to HTML elements to **provide additional information or functionality**.
- **CSS Properties** are part of the CSS language and are used within style sheets or style blocks to **define the appearance and layout of content**.

### `How They Work Together:`

While HTML attributes define properties and values of the HTML elements themselves, CSS properties define how these elements should be displayed visually on the web page.  
For example, the href attribute in an a tag determines the link's destination, while the CSS color property for the same a tag will define the link's color.  
In a nutshell, while HTML attributes give elements their native behavior and characteristics, CSS properties customize their appearance and layout on the web page.

---

## `Basic Selectors and Properties`

In CSS, selectors are patterns used to select the elements you want to style. Once you've selected an element, you can apply styles to it using properties.

### `Universal and Type Selectors`

1. **Universal Selector (\*):** Targets all elements on a page.

```css
* {
  margin: 0;
  padding: 0;
}
```

1. **Type Selector (or Element Selector):** Targets **all** elements of a specified type on a web page.

```css
p {
  color: green;
}
```

### `Class and ID Selectors`

1. **Class Selector (.classname):** Starts with a dot (.) and targets elements with a specific class attribute. Multiple elements can have the same class.

```css
.my-cool-button {
  background-color: blue;
  color: white;
}
```

1. **ID Selector (#idname):** Starts with a hash (#) and targets a single element with a specific ID attribute. Each ID should be unique within a page.

```css
#my-container-for-images {
  background-color: gray;
  height: 50px;
}
```

### `Basic Properties`

Here are some basic CSS properties to get started. You will probably use these for every element you create.

1. **Color:** Sets the color of the text in an element.

```css
p {
  color: red;
}
```

1. **Font-size:** Sets the size of the text in an element.

```css
h1 {
  font-size: 24px;
}
```

1. **Background-color:** Sets the background color of an element.

```css
div {
  background-color: yellow;
}
```

1. **Width and Height:** Sets the width and height of an element.

```css
.box {
  width: 100px;
  height: 100px;
}
```

1. **Border:** Sets the border around an element.

```css
img {
  border: 2px solid black;
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Useful Links`

- [devdocs](https://devdocs.io/)
