# `Common HTML Elements, Attributes and Values`

## 'The HTML Document Object Model Tree'

**Important Note:**
Most of the material in these notes have been adapted from:

**Further notes:**

1. Comments in html are placed within the following text:

```html
<!-- This is a comment. It is not rendered in the browser but is visible only to the coders working on the code. -->
```

2. While it is not necessary, I find it useful to put attributes in alphabetical order to facilitate looking through them for missing ones or for problems.

- [devdocs](https://devdocs.io/)
- [Mozilla Developer Resources](https://developer.mozilla.org/)

![The HTML DOM Tree of Objects](https://www.w3schools.com/js/pic_htmltree.gif)  
Source: [The HTML DOM (Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp)

---

## `Doctype Declaration`

The doctype is the required preamble found at the top of all documents. Its sole purpose is to ensure that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications. Every html document needs to start with one of these declarations

Code:

```html
<!DOCTYPE html>
```

---

## `html element`

The HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. It can only contain one head element and one body element following the head element. It has no parents as it is the root element of a document.

```html
<!DOCTYPE html>
<html></html>
```

### `attribute: lang:`

The html element can take the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) but for a beginner, the most usual one is the lang attribute.

The lang attribute defines the language of the element to which it belongs. Setting it on the html element defines the language for the whole page. For the english language, the value is "en". A list for other languages is here: [HTML lang values](https://gist.github.com/JamieMason/3748498)

```html
<!DOCTYPE html>
<html lang="en"></html>
```

---

## `head element`

The HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head> </head>
</html>
```

### `meta tag`

The meta is a self-closing tag that represents metadata that cannot be represented by other HTML meta-related elements. The code below contains the meta tags with the most common attributes.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <!-- This attribute specifies the character encoding for the HTML document. The utf-8 value specified characters in the unicode set -->
    <meta charset="utf-8" />
    <!-- This viewport tag instructs the browser to set the width of the page to follow the screen-width of the device (which varies depending on the device) and to set the initial zoom level to 1.0 (no zoom). This is a foundational step in making a site responsive, but additional CSS is usually required to ensure the site looks good on all devices. -->
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!-- Description (provides a brief description of the page for search engines) -->
    <meta content="A brief description of the webpage." name="description" />
    <!-- Defines the author and the author's name -->
    <meta content="Author's Name" name="author" />
  </head>
</html>
```

### `The link tag`

The link self-closing tags specifies relationships between the current document and an external resource. It can be placed anywhere in the document but is usually placed within the head element. The the example here links a css file in the root folder of your document:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="A brief description of the webpage." name="description" />
    <meta content="Author's Name" name="author" />
    <!-- Links the main css stylesheet in the root folder of your project -->
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
</html>
```

### `The script element`

The script HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. It may be placed in other places on the page, but is usually placed in the head element.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="A brief description of the webpage." name="description" />
    <meta content="Author's Name" name="author" />
    <link href="styles.css" rel="stylesheet" type="text/css" />
    <!-- Links the main javascript code in the root folder of your project -->
    <script src="script.js"></script>
  </head>
</html>
```

---

## `title element`

The title element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored. The title element usually comes at the bottom of the head element, just above the head closing head.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="A brief description of the webpage." name="description" />
    <meta content="Author's Name" name="author" />
    <link href="styles.css" rel="stylesheet" type="text/css" />
    <!-- Links the main javascript code in the root folder of your project -->
    <script src="script.js"></script>
    <title>My Website</title>
  </head>
</html>
```

---

## `body element`

The body element represents the main content of an HTML document. There can be only one body element in a document.

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="A brief description of the webpage." name="description" />
    <meta content="Author's Name" name="author" />
    <link href="styles.css" rel="stylesheet" type="text/css" />
    <!-- Links the main javascript code in the root folder of your project -->
    <script src="script.js"></script>
    <title>My Website</title>
    <body>
      The main content of your web page goes here
    </body>
  </head>
</html>
```

---

## `h elements`

---

## `p elements`

---

## `ul elements with li element`

---

## `ol elements with li element`

---

## `table element`

### `thead element`

### `tbody element`

### `tr element`

### `td element`

---

## `img tag`

### `attribute: src`

---

## `a element`

### `attribute: href`

### `attribute: target`

---

## `video element`

### `attribute: source`

### `attribute: type`

### `attribute: autoplay`

### `attribute: loop`

### `attribute: muted`

### `attribute: width`

---

## `iframe element`

### `attribute: source`

### `attribute: allowfullscreen`

---

## `figure element`

---

## `figcaption element`

---

## `form element`

### `action attribute`

### `method attribute (post)`

---

## `fieldset element`

---

## `legend element`

---

## `input tag`

### `id attribute`

### `type attribute (text and submit)`

### `name attribute`

### `value attribute`

### `placeholder attribute`

### `checked attribute`

---

## `label element`

---

## `button element`

---

## `div element`

---

## `section element`

---

## `footer elements`

---

## `Validation`

[Markup Validation Service](https://validator.w3.org/)

---

## `Go Beyond`

[Code a simple game using HTML, CSS, and JavaScript | FreeCodeCamp](https://www.freecodecamp.org/news/how-to-code-a-simple-game/)

Bonus points if you use TailwindCSS instead of CSS.

## `Useful Links`

- [devdocs](https://devdocs.io/)
- [Emmet Documentation](https://docs.emmet.io/)
- [Mozilla Developer Resources](https://developer.mozilla.org/)

---
