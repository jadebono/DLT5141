# `Basic Concepts of CSS`

[Return to main page](../README.md)

**Note:** Start with the box model

---

## `Table of Contents`

- [Introduction to CSS](#introduction-to-css)
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

## `Useful Links`

- [devdocs](https://devdocs.io/)
