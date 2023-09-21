# `Basic Concepts of CSS`

[Return to main page](../README.md)

---

## `Table of Contents`

- [Introduction to CSS](#introduction-to-css)
- [CSS Attributes and Properties: A Quick Explanation](#css-attributes-and-properties-a-quick-explanation)
- [Basic Selectors and Properties](#basic-selectors-and-properties)
- [The Box Model](#the-box-model)
- [Layout and Positioning](#layout-and-positioning)
- [Typography](#typography)
- [Colors and Backgrounds](#colors-and-backgrounds)
- [Advanced Selectors](#advanced-selectors)
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

- **Universal Selector (\*):** Targets all elements on a page.

```css
* {
  margin: 0;
  padding: 0;
}
```

- **Type Selector (or Element Selector):** Targets **all** elements of a specified type on a web page.

```css
p {
  color: green;
}
```

### `Class and ID Selectors`

- **Class Selector (.classname):** Starts with a dot (.) and targets elements with a specific class attribute. Multiple elements can have the same class. Also, the same element can have many different classes.

```css
.my-cool-button {
  background-color: blue;
  color: white;
}
```

- **ID Selector (#idname):** Starts with a hash (#) and targets a single element with a specific ID attribute. Each ID should be unique within a page.

```css
#my-container-for-images {
  background-color: gray;
  height: 50px;
}
```

### `Basic Properties`

Here are some basic CSS properties to get started. You will probably use these for every element you create.

- **Color:** Sets the color of the text in an element.

```css
p {
  color: red;
}
```

- **Font-size:** Sets the size of the text in an element.

```css
h1 {
  font-size: 24px;
}
```

- **Background-color:** Sets the background color of an element.

```css
div {
  background-color: yellow;
}
```

- **Width and Height:** Sets the width and height of an element.

```css
.box {
  width: 100px;
  height: 100px;
}
```

- **Border:** Sets the border around an element.

```css
img {
  border: 2px solid black;
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `The Box Model`

In web design and development, the CSS box model is a fundamental concept that describes the design and layout of elements on a webpage. Every element on a page is considered a rectangular box, and the box model details how the size and spacing of these boxes are worked out. It is **essential** to master the box model as without such knowledge precise layout of elements on a page becomes very difficult, if not impossible.

### `Understanding the Components`

The box model consists of four main components, from innermost to outermost:

1. **Content:** This is the actual content of the box, where text, images, or other media reside.
1. **Padding:** The space between the content and the border. It's transparent, meaning it doesn't have a color unless specified.
1. **Border:** A visible (or invisible) line that goes around the padding and content.
1. **Margin:** The space outside the border. It's used to separate the box from other boxes and is also transparent.

![CSS Box Model](https://www.csssolid.com/images/box-model/css-box-model.png)

Note: In this image, the green perimeter is the padding which is always invisible but in this case has been colored green so that you may better visualise it. The border is the line around the padding. The border can be set to any width, style and color you desire. In this case, we have thick solid border in an orange color.

```css
div {
  /* Content dimensions */
  width: 300px;
  height: 150px;

  /* Padding */
  padding: 10px;

  /* Border */
  border: 5px solid black;

  /* Margin */
  margin: 20px;
}
```

### `The box-sizing property`

The box-sizing property can alter how the box model works:

1. **content-box** (default): Width and height properties include only the content. Border and padding are added outside of the box.
1. **border-box**: Width and height properties include content, padding, and border. This makes it easier to size elements.

### `Block vs Inline Elements`

HTML elements are by default either block-level or inline-level:

1. Block-level Elements: These elements take up the full width available and start on a new line. Examples include div, h1, p, and li.
1. Inline-level Elements: These elements only take up as much width as necessary and do not start on a new line. Examples include span, a, and img.

### `Setting Margin and Padding`

Margins and padding are crucial components of the CSS box model. They control the spacing around and within elements, respectively. Properties can be either px (pixels) or % (percentage of parent element's width for horizontal properties life left and right, and percentage of parent element's height for vertical properties like top and bottom).

#### `Long Form`

Using the long form, you can specify each side of the box individually. This gives you individual control over the spacing.

**Margin:**

```css
div {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  margin-left: 15px;
}
```

**Padding:**

```css
div {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
}
```

#### `Shorthand Form`

The shorthand form allows you to set the values more succinctly. Depending on the number of values you provide, the behavior changes.

- **One value:** This value applies to all four sides.

```css
div {
  margin: 10px;
  padding: 10px;
}
```

- **Two values:** The first value is for the top and bottom, and the second value is for the left and right.

```css
div {
  margin: 10px 15px;
  padding: 10px 15px;
}
```

- **Three values:** The first value is for the top, the second value is for the left and right, and the third value is for the bottom.

```css
div {
  margin: 10px 15px 20px;
  padding: 10px 15px 20px;
}
```

- **Four values:** Each value applies to a side, in the order top, right, bottom, and left (clockwise).

```css
div {
  margin: 10px 15px 20px 25px;
  padding: 10px 15px 20px 25px;
}
```

**Notes:**

- Remember the mnemonic **T** **R** ou **B** **L** e (TRouBLe) to recall the order: Top, Right, Bottom, Left.
- Using the shorthand form can make your stylesheets shorter and more readable, but it's essential to be aware of the order to avoid confusion.

### `Setting the Border`

Borders in CSS are used to create a line around the outside of an element. You can control the style, width, and color of borders using various properties. The main attributes are **width**, **style**, **color**, and **radius**. Width, style and color can be set for all individual four borders (top, right, bottom left) so you can use both the long form or the shorthand form. Radius is set for the entire border.

#### `Border Width`

You can set the width of the border using the **border-width** attribute. Like margins and padding, you can use specific values for each side or use shorthand notation. Each example below will give the long form and the shorthand form.

```css
div {
  border-top-width: 2px;
  border-right-width: 3px;
  border-bottom-width: 2px;
  border-left-width: 3px;
}

div {
  border-width: 2px 3px 2px 3px;
}
```

#### `Border Style`

The **border-style** attribute defines the style of the border. Common values include **solid**, **dashed**, **dotted**, **double**, and **none**.

```css
div {
  border-top-style: solid;
  border-right-style: dashed;
  border-bottom-style: dotted;
  border-left-style: double;
}

div {
  border-style: solid;
}

div {
  border-style: dashed;
}

div {
  border-style: dotted;
}

div {
  border-style: none;
}
```

#### `Border Color`

You can set the color of the border using the **border-color** attribute.

```css
div {
  border-top-color: red;
  border-right-color: green;
  border-bottom-color: blue;
  border-left-color: yellow;
}

div {
  border-color: red green blue yellow;
}
```

#### `Shorthand for All Border Properties`

```css
div {
  border: 2px solid red;
}
```

#### `Border Radius`

The **border-radius** attribute allows you to round the corners of an element:

```css
div {
  border-radius: 10px; /* All four corners */
}
```

You can also specify each corner individually:

```css
div {
  border-radius: 10px 20px 30px 40px; /* Top-left, Top-right, Bottom-right, Bottom-left */
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Layout and Positioning`

In web design, how elements are positioned on a page is crucial for usability and aesthetics. CSS provides several attributes and techniques to control the layout and positioning of elements.

### `Normal Document Flow`

By default, elements on a web page follow the "normal document flow". This means:

1. **Block-level** elements stack vertically, one after the other.
1. **Inline-level** elements sit side by side in the order they appear in the HTML.

### `The Display Property`

The **display** attribute determines how an element is treated in terms of the box model and document flow. It takes four values: **block**, **inline**, **inline-block** and **none**.

- **block**: Element takes up the full width available and starts on a new line.
- **inline**: Element only takes up as much width as necessary and does not start on a new line.
- **inline-block**: Element is treated as inline but retains block-level styling features.
- **none**: Element is removed from the document flow and is not displayed.

```css
span {
  display: block;
}

div {
  display: inline;
}

div {
  display: inline-block;
}

div {
  display: none;
}
```

### `Positioning`

The **position** attribute defines how an element is positioned within its containing element. It has five values: **static**, **relative**, **absolute**, **fixed** and **sticky**.

1. **static (default)**: Element follows the normal document flow.
1. **relative**: Element is positioned relative to its normal position. It doesn't remove the element from the document flow.
1. **absolute**: Element is positioned relative to the nearest positioned ancestor (not static). If no positioned ancestors exist, it's positioned relative to the viewport.
1. **fixed**: Element is positioned relative to the viewport and remains in the same position even when the page is scrolled.
1. **sticky**: Element is positioned based on the user's scroll position. It toggles between relative and fixed positioning.

```css
div {
  position: relative;
  top: 10px; /* Moves the element 10px down from its normal position */
}

div {
  position: absolute;
  top: 20px;
  left: 30px;
}

div {
  position: fixed;
  bottom: 0;
  right: 0;
}

div {
  position: sticky;
  top: 0;
}
```

### `The float Property`

The float attribute is now mostly used for wrapping text around images. Elements can be floated to the left or right, allowing other elements to wrap around them.

```css
img {
  float: left;
  margin-right: 10px;
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Typography`

Typography in web design refers to the art and technique of arranging type to make written language legible, readable, and appealing. It encompasses everything from font choice to line length. Proper typography ensures both the functionality and aesthetics of web content.

### `Web-safe Fonts and Custom Fonts`

- **Web-safe Fonts**: These are fonts that are commonly installed across most devices and browsers. Using them ensures that your text appears consistently across different platforms. A list is available here:

[Web-safe fonts](https://www.cssfontstack.com/)

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

- **Custom Fonts**: With the rise of web fonts, you can now use a vast array of custom fonts. These can be loaded using services like Google Fonts or by hosting font files on your server. You need to import these fonts using a @import command.

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
```

**Note**: The first font in the list of values following the font-family attribute is your preferred choice of font. The subsequent fonts are failsafe fonts, in case your preferred choice of font is not available. For failsafe fonts, it is best to choose from the list of web-safe fonts.

### `Font Properties`

- **font-family**: Specifies the typeface to be used. Choose from web-safe or custom fonts. Remember to add a fallback font.

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

- **font-size**: Sets the size of the text. Values can be px (pixels) or em, which is a unit of measurement relative to the parent's size.

Example 1: using px as a value

```css
h1 {
  font-size: 24px;
}
```

Example 2: using em as a value

```css
body {
  font-size: 16px; /* This is often the default browser font size */
}

h1 {
  font-size: 2em; /* 2 * 16px = 32px */
}
```

- **font-weight**: Determines the thickness of the characters. Common values include **normal**, **bold**, and numeric weights from 100 to 900.

```css
p {
  font-weight: bold;
}
```

- **font-style**: Specifies the style of the font, with the following values: **normal**, **italic**, **oblique** and **inherit**.

```css
p {
  font-style: italic;
}
```

- **line-height**: Controls the space between lines of text. It can improve readability. Values can be a number representing a multiplier of the font-size, or px or em as in font-size.

```css
p {
  font-size: 16px;
  line-height: 1.5; /* 1.5 * 16px = 24px */
}
```

- **text-transform**: Controls the capitalization of text. Values include **uppercase**, **lowercase**, and **capitalize**.

```css
h2 {
  text-transform: uppercase;
}
```

- **text-decoration**: Adds decoration to text, like **underline**, **overline**, **line-through**, or **none**.

```css
h1 {
  text-decoration: underline;
}
```

### `Letter Spacing and Word Spacing`

- **letter-spacing**: Adjusts the space between characters. Values are similar to those of line-height.

```css
p {
  letter-spacing: 2px;
}
```

- **word-spacing**: Adjusts the space between words. Values are the same as line-height and letter-spacing.

```css
p {
  word-spacing: 4px;
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Colors and Backgrounds`

Colors play a vital role in web design, influencing both the aesthetics and the user experience. Backgrounds, on the other hand, can enhance the visual appeal of an element or the entire page. CSS provides a rich set of properties to control colors and backgrounds.

### `Color Attributes`

There are two main color attributes: **color** and **background-color**. They have a number of values that will be listed in the appropriate sections below

- **color**: sets the color of text in an element.
- **background-color**: sets the color of the background of the element.

```css
p {
  background-color: black; /* sets the background color of the p element to black*/
  color: white; /* sets the color of the text in the p element  to white*/
}
```

### `Color Values`

CSS supports various methods to represent color:

- [**CSS Named Colors**](https://www.quackit.com/css/color/charts/css_color_names_chart.cfm): a list of named colors such as **blue**, **red**, **green** and more complex ones such as **indianred**.

```css
p {
  color: mediumspringgreen;
}
```

- **Hexadecimal (Hex)**: A six-digit representation of color such as **#ff5733**.

```css
p {
  color: #ff5733;
}
```

- **RGB**: Stands for Red, Green, Blue (RGB). A color mixing mode using Red, Green and Blue values from 0-255 to generate a color: rgb(255,248,220)

```css
div {
  background-color: rgb(255, 87, 51);
}
```

- **RGBA**: Like RGB, but with an added Alpha channel for opacity. The value for opacity ranges from 0.0 (fully transparent) to 1.0 (fully opaque): rgba(255, 99, 71, 0.5),

```css
div {
  background-color: rgba(255, 87, 51, 0.5); /* 50% opacity */
}
```

- **HSL**: Stands for Hue, Saturation, Lightness (HSL). Another color mixing mode like RGB. The value of hue is from 0 to 360. The values for saturation and lightness are percentages.

```css
h1 {
  color: hsl(12, 100%, 50%);
}
```

- **HSLA**: Like HSL, but with an added Alpha channel for opacity. Once again, the values for the opacity range from 0.0 (fully transparent) to 1.0 (fully opaque): hsla(12, 100%, 50%, 0.3),

```css
h1 {
  color: hsla(12, 100%, 50%, 0.7); /* 70% opacity */
}
```

### `Background Color`

You can set the background color of an element using the background-color attribute. The values are the same as those for the color attribute.

### `Background Repeat`

By default, background images will repeat to cover the entire element. You can control this behavior with the **background-repeat** attribute and the **no-repeat** value.

**Note**: The background-repeat attribute has other values to repeat the background image but in general this does not produce a clean look.

```css
div {
  background-repeat: no-repeat; /* Other possible values: repeat-x, repeat-y, repeat */
}
```

### `Background Position`

The **background-position** attribute lets you control the starting position of a background image.

```css
div {
  background-position: center center; /* Values can be keywords or percentages */
}
```

### `Background Size`

With the **background-size** attribute, you can specify the size of the background image.

```css
div {
  background-size: cover; /* Other values: contain, 100px 200px, 50% 50% */
}
```

### `Gradients`

CSS allows you to create color gradients as backgrounds. Gradients can be linear or radial.

- **linear-gradient**: creates a linear gradient from the first supplied color to the second one. Color values are the same as those of the **color** and **background-color** attributes.

```css
div {
  background: linear-gradient(red, yellow);
}
```

### `Shorthand Background Attribute`

You can set multiple background attributes in one line using the shorthand **background** attribute.

```css
div {
  background: #ff5733 url("path-to-image.jpg") no-repeat center center / cover;
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Advanced Selectors`

**[Try it here](https://jsfiddle.net/)**

---

## `Useful Links`

- [devdocs](https://devdocs.io/)
