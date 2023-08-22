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

## `Important Notes`

1. All subsequent elements and tags go in the body element.
1. Block-level elements vs inline elements:
   - A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). An example of a block-level element is the p element;
   - An inline element does not start on a new line and only takes up as much width as necessary. An example of an inline-level element is the a element.

---

## `h elements`

The h1 to h6 HTML elements represent six levels of section headings. h1 is the highest section level and h6 is the lowest. The h elements are

```html
<h1>Infraorder:	Simiiformes</1>
<h2>Family:	Hominidae</h2>
<h3>Subfamily: Homininae</h3>
<h4>Tribe: Hominini</h4>
<h5>Genus: Homo</h5>
<h6>Species: Homo sapiens</h6>

```

---

## `p elements`

The p element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

```html
<p>
  [1] I. Quo usque tandem abutere, Catilina, patientia nostra? quam diu etiam
  furor iste tuus nos eludet? quem ad finem sese effrenata iactabit audacia?
  Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae, nihil timor
  populi, nihil concursus bonorum omnium, nihil hic munitissimus habendi senatus
  locus, nihil horum ora voltusque moverunt? Patere tua consilia non sentis,
  constrictam iam horum omnium scientia teneri coniurationem tuam non vides?
  Quid proxima, quid superiore nocte egeris, ubi fueris, quos convocaveris, quid
  consilii ceperis, quem nostrum ignorare arbitraris? [2] O tempora, o mores!
  Senatus haec intellegit. Consul videt; hic tamen vivit. Vivit? immo vero etiam
  in senatum venit, fit publici consilii particeps, notat et designat oculis ad
  caedem unum quemque nostrum. Nos autem fortes viri satis facere rei publicae
  videmur, si istius furorem ac tela vitemus. Ad mortem te, Catilina, duci iussu
  consulis iam pridem oportebat, in te conferri pestem, quam tu in nos [omnes
  iam diu] machinaris.
</p>
```

---

## `ul elements with li element`

The ul element represents an unordered list of items, typically rendered as a bulleted list. Each item in the unordered list should be created by nesting li element within the ul element. You can also nest more ul elements within li elements to create sub-lists.

For example, to create this unordered list:

- Milk
- Cheese
  - Blue Cheese
  - Feta

Use this code (note how the hierarchy of elements creates the list above):

```html
<ul>
  <li>Milk</li>
  <li>
    Cheese
    <ul>
      <li>Blue Cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

**Note:** If you want to change the bullet type of a ul element, you have to use CSS.

---

## `ol elements with li element`

The ol element represents an ordered list of items — typically rendered as a numbered list. Syntax is pretty much like the ul element with nested li elements and other ol elements.

For example to create this ordered list:

1. Milk
1. Cheese
   1. Blue Cheese
   1. Feta

use this code:

```html
<ol>
  <li>Milk</li>
  <li>
    Cheese
    <ol>
      <li>Blue Cheese</li>
      <li>Feta</li>
    </ol>
  </li>
</ol>
```

**Note:** If you want to change the type of numbering used, can use the type argument in the li element. The value should be the numbering system you prefer, such as 1, I, a etc. example:

```html
<ol>
  <li type="1">Milk</li>
  <li type="1">
    Cheese
    <ol>
      <li type="I">Blue Cheese</li>
      <li type="I">Feta</li>
    </ol>
  </li>
</ol>
```

This creates this numbered list:

1. Milk
2. Cheese  
   I. Blue Cheese  
   II. Feta

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

## `span element`

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
