# `Common HTML Elements and Attributes`

[Return to main page](../README.md)

## 'The HTML Document Object Model Tree'

**Important Note:**
Most of the material in these notes have been adapted from:

**Further notes:**

1. Comments in html are placed within the following text:

```html
<!-- This is a comment. It is not rendered in the browser but is visible only to those reading the code (either through an IDE, text file, or even by inspecting the source of an html page in the browser). -->
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

### `html attributes:`

The html element can take the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) but for a beginner, the most usual one is the lang attribute.

- **lang:** This attribute defines the language of the element to which it belongs. Setting it on the html element defines the language for the whole page. For the english language, the value is "en". A list for other languages is here: [HTML lang values](https://gist.github.com/JamieMason/3748498)

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

---

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

---

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

---

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

**[Try it here](https://jsfiddle.net/)**

---

## `Important Notes`

1. All subsequent elements and tags go in the body element.
1. Block-level elements vs inline elements:
   - A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). An example of a block-level element is the p element;
   - An inline element does not start on a new line and only takes up as much width as necessary. An example of an inline-level element is the a element.

### `List of block-Level elements`

address, article, aside, blockquote, canvas, dd, div, dl, dt, fieldset, figcaption, figure, footer, form, h1 - h6, header, hr, li, main, nav, noscript, ol, p, pre, section, table, tfoot, ul, video

### `List of inline-Level elements`

a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, output, q, samp, script, select, small, span, strong, sub, sup, textarea, time, tt, var

---

## `main element`

The main element represents the dominant content of the body of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

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
      <main>The main content of your web page goes here</main>
    </body>
  </head>
</html>
```

**[Try it here](https://jsfiddle.net/)**

**Block-Level:** main is a block-level element.

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

**[Add some h elements here](https://jsfiddle.net/)**

**Block-Level:** The h elements are block-level elements.

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

**[Add a p elements here](https://jsfiddle.net/)**

**Block-Level:** The p element is a block-level element.

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

**[Try it here:](https://jsfiddle.net/)**

**Block-Level:** The ul element is a block-level element.

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

**[Try it here:](https://jsfiddle.net/)**

**Block-Level:** The ol element is a block-level element.

---

## `table element`

The table element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. You need to assemble from a number of other child elements such as thead, th, tbody, tr, td and caption. Think of the table element like the html element. You nest the other elements inside it.

```html
<table></table>
```

### `thead element`

The <thead> element defines a set of rows defining the head of the columns of the table. like HTML's head element, it is nested in the table element and there can only be one thead element. You can nest other table elements in thead. The code below creates a row to serve as the head of the columns in the table.

```html
<table>
  <thead></thead>
</table>
```

### `tr element`

The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements. tr elements are nested in thead and tbody elements. In the code below, the tr element creates the row in the header.

```html
<table>
  <thead>
    <tr></tr>
  </thead>
</table>
```

### `th element`

The th element defines a cell as the header of a group of table cells. th elements are nested inside tr elements. It has an important attribute called scope with the following values:

- col: Indicates that the header cell is a header for a column.
- row: Indicates that the header cell is a header for a row.
- colgroup: Indicates that the header cell is a header for a group of columns (used in conjunction with the colgroup and col elements).
- rowgroup: Indicates that the header cell is a header for a group of rows.

In the following code the th element with the scope="col" attribute creates a row the cells of which are column headers containing the text Items and Expenditure.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
</table>
```

### `tbody element`

The tbody element encapsulates a set of table rows (tr elements), indicating that they comprise the body of the table. A table contains both a thead and a tbody and the tbody element comes under the thead element, in the same way that an HTML document contains both a head and body, with the body element coming under the head element.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

### `td element`

The td elements defines a cell of a table that contains data. td elements are nested within tr elements and each creates a cell of that row moving from left to right in the order that the td elements are nested in the tr elements.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Laptop</th>
      <td>€1,000</td>
    </tr>
    <tr>
      <th scope="row">Software</th>
      <td>€500</td>
    </tr>
  </tbody>
</table>
```

### `caption element`

The caption HTML element specifies the caption (or title) of a table. Nest it just under the opening table element.

```html
<table>
  <caption>
    Work Resources
  </caption>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Laptop</th>
      <td>€1,000</td>
    </tr>
    <tr>
      <th scope="row">Software</th>
      <td>€500</td>
    </tr>
  </tbody>
</table>
```

**Note:** This will create an extremely ugly table. Style it with CSS or a CSS framework.

**[Try it here:](https://jsfiddle.net/)**

**Block-Level:** The table element is a block-level element.

---

## `img tag`

The img element embeds an image into the document. It is a self-closing tag and these are some of its more important attributes:

### `img attributes`

- **src:** (required) Specifies the path or URL of the image. This is the most essential attribute for the img tag.
- **alt:** Provides a text alternative for the image. This is especially important for accessibility, as screen readers will read out this text for users who can't see the image.

```html
<img
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
  alt="Five cats looking around a field."
/>
```

This will place the following image on your web page:

![CatPhotoApp_FreeCodeCamp](https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg)

**[Try it here:](https://jsfiddle.net/)**

**Inline-Level:** The img tag is an inline-level element.

---

## `figure element`

The figure element represents self-contained content, potentially with an optional caption, which is specified using the figcaption element. The figure, its caption, and its contents are referenced as a single unit.

The figure element can be used with a large variety of content, not just with the img element:

- Images: the img tag
- Code blocks: the code element
- Videos: the video element
- Audio: the audio element
- Embedded charts, diagrams and graphs
- Blockquotes: the blockquote element
- Tables: the table element
- Text: the p element
- Embedded maps

```html
<figure>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
    alt="Five cats looking around a field."
  />
</figure>
```

**[Try it here:](https://jsfiddle.net/)**

**Block-Level:** The figure element is a block-level element.

---

## `figcaption element`

The figcaption element represents a caption or legend describing the rest of the contents of its parent figure element.

```html
<figure>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
    alt="Five cats looking around a field."
  />
  <figcaption>Five cute cats in a field</figcaption>
</figure>
```

**[Try it here:](https://jsfiddle.net/)**

**Block-Level:** The figcaption element is a block-level element.

---

## `a element`

The a element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

### `a attributes`

- **href:** (required) is the link that you want to use
- **target:** Specifies where to open the linked document. With a value of \_blank, it opens the links in a new page which is very convenient for your users.

```html
<a href="https://www.freecodecamp.org" target="_blank">FreeCodeCamp</a>
```

**[Try it here:](https://jsfiddle.net/)**

**Inline-Level:** The a element is an inline-level element.

---

## `video element`

The video element embeds a media player which supports video playback into the document. The source of the video is local, i.e. one hosted by yourself in your project folder. You can use video for audio content as well, but the audio element may provide a more appropriate user experience.

### `video attributes`

- **autoplay:** No value. If present the video will autoplay once the page loads. Don't put it in. It is incredibly annoying for users
- **controls:** No value. If present it will offer controls for the user
- **loop:** No value. If present, the browser will keep playing the video on a loop
- **muted:** No value. If present the default setting for the audio will be mute. If absent, the default setting will be with audio
- **src:** The link to the video you want to embed
- **type:** specifies the MIME type of the video file helping the browser understand the specific codec to use to playback the video. Possible values are these:
  - video/webm: WebM video format, typically using the VP8 or VP9 codec
  - video/mp4: MP4 video format, often using the H.264 video codec
  - video/ogg: Ogg video format, typically using the Theora codec.
  - video/3gpp and video/3gpp2: Used for 3G mobile phones. These formats might use various codecs.
  - video/x-msvideo: AVI format.
  - video/x-flv: Flash video format.
  - video/quicktime: QuickTime format, using the .mov file extension.
  - video/x-matroska: Matroska format, using the .mkv file extension for video with audio and subtitles.
  - video/mpeg: MPEG video format, typically MPEG-1 or MPEG-2.
- **width:** The width of the video's display area

```html
<video
  controls
  muted
  src="/media/cc0-videos/flower.webm"
  type="video/webm"
  width="250"
></video>
```

**[Try it here:](https://jsfiddle.net/)**

**Block-Level:** The video element is a block-level element.

---

## `iframe element`

The iframe element represents a nested browsing context, embedding another HTML page into the current one. You can also embed an online video in it.

### `iframe attributes`

- **allowfullscreen:** No value. If it is present it activates fullscreen mode
- **src:** (required) is the link of the browsing content you are embedding in your web page
- **width:** The width of the video's display area

```html
<iframe src="https://www.youtube.com/embed/Szv5Yx7xdyM" width="560"></iframe>
```

**Note:** Some video-hosting websites provide you with their preferred code for the iframe element which may provide further code to allow the playback of their proprietary media.

**[Try it here:](https://jsfiddle.net/)**

---

## `form element`

The form element represents a document section containing interactive controls for submitting information. A form is built by nesting other elements in it and it takes a number of attributes.

```html
<form></form>
```

**Block-Level:** The form element is a block-level element.

### `form attributes`

- **action:** is the attribute that defines the destination to which to send the data in the form. You do not need it to send inputs to your javascript file
- **method:** specifies the way that data is sent from the form to its destination. There are two different values here: get and post. The post method does not reveal the inputs submitted in the browser's url bar, and it can send a lot more data than get. In general, post is a much better option here especially if your are submitting usernames and password.

```html
<form action="https://mywebsite.com/submit_form.php" method="post"></form>
```

---

## `form elements: fieldset element`

The fieldset HTML element is used to group several controls as well as labels (label element) within a web form.

```html
<form>
  <fieldset>
    <input type="text" />
    <label for="kraken">Kraken</label><br />
    <input type="text" />
    <label for="sasquatch">Sasquatch</label><br />
    <input type="text" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

**[Try it here](https://jsfiddle.net/)**

**Block-Level:** The fieldset element is a block-level element.

---

## `form elements: legend element`

The legend provides a caption for the content of its parent fieldset.

```html
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>
    <input type="text" />
    <label for="kraken">Kraken</label><br />
    <input type="text" />
    <label for="sasquatch">Sasquatch</label><br />
    <input type="text" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

**[Try it here](https://jsfiddle.net/)**

---

## `input tag`

The input element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The input element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.

- **id:** The id attribute can be used in conjunction with the label element for attribute to associate a label with a specific input element. This enhances accessibility and allows users to click on the label to focus/select the input element. It is also very useful as a CSS and Javascript selector.
- **name:** is the name of the form control. Submitted with the form as part of a name/value pair. When the form is submitted the value of name becomes a key, and the text submitted from the input becomes the value.
- **placeholder:** allows you to put default text. Especially useful in a textbox.
- **type:** has many values. For our current purposes, the only one that is pertinent is text which creates a textbok. However, there are many different type of values for type including radio, checkbox etc.
- **value:** specifies the intial value of your input. Less useful with text, but more useful with inputs such as radio and checkbox

```html
<input id="cheese" name="cheese" placeholder="I ADORE cheese" type="text" />
```

**[Try it here](https://jsfiddle.net/)**

**Inline-Level:** The input element is an inline-level element.

---

## `form elements: label element`

The label element represents a caption for an item in a user interface. It is usually placed before or after its associated input element.

- **for:** is a single id that is paired with the id of its associated input element.

```html
<label for="cheese">Do you like cheese?</label>
<input id="cheese" name="cheese" placeholder="I ADORE cheese" type="text" />
```

**[Try it here](https://jsfiddle.net/)**

**Inline-Level:** The label element is an inline-level element.

---

## `form elements: button element`

The button element has multiple uses and is usually activated by a mouse click (or other types of input). When placed in a form element, below the form's closing tag with a type attribute set to submit, it submits the data of the form.

- **type:** when given a value of submit, it submits the input in the form.

```html
<form action="https://mywebsite.com/submit_form.php" method="post"></form>
  <fieldset>
    <label for="cheeseOne">Input a type of cheese</label>
<input id="cheeseOne" name="cheeseOne" placeholder="I ADORE cheese" type="text" /></br>
<label for="cheeseTwo">Input another type of cheese</label>
<input id="cheeseTwo" name="cheeseTwo" placeholder="I ADORE cheese" type="text" /></br>
<label for="cheeseThree">Input a third type of cheese</label>
<input id="cheeseThree" name="cheeseThree" placeholder="I ADORE cheese" type="text" /></br>
  </fieldset>
  <button type="Submit">Submit your cheese!</button>
</form>
```

**Note:** the br tag is a line break.

**[Try it here](https://jsfiddle.net/)**

**Inline-Level:** The button element is an inline-level element.

---

## `div element`

The div element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS.

```html
<div></div>
```

**Block-Level:** The div element is a block-level element.

---

## `span element`

The span element is another container element, a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other element is appropriate. span is very much like a div element, but div is a block-level element whereas a span is an **inline element**. Combined together, div and span elements give you great flexibility in laying out your content.

```html
<span></span>
```

**Inline-Level:** The span element is an inline-level element.

---

## `section element`

The section element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions. The section element is a **block-level element**.

```html
<section></section>
```

**Block-Level:** The section element is a block-level element.

---

## `footer elements`

The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. As such, you can have more than one footer on a page. A footer typically contains information about the author of the section, copyright data or links to related documents.

```html
<footer></footer>
```

**Block-Level:** The footer element is a block-level element.

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
