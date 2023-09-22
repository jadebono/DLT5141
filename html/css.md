# `Basic Concepts of CSS`

[Return to main page](../README.md)

---

## `Table of Contents`

- [Introduction to CSS](#introduction-to-css)
- [CSS Attributes and Properties: A Quick Explanation](#css-attributes-and-properties-a-quick-explanation)
- [The Cascade Principle](#the-cascade-principle)
- [Basic Selectors and Properties](#basic-selectors-and-properties)
- [The Box Model](#the-box-model)
- [Layout and Positioning](#layout-and-positioning)
- [Typography](#typography)
- [Colors and Backgrounds](#colors-and-backgrounds)
- [Advanced Selectors](#advanced-selectors)
- [Transitions](#transitions)
- [Responsive Design](#responsive-design)
- [Flexbox](#flexbox)
- [Grid](#grid)
- [Web UI Style Guide](#web-ui-style-guide)
- [Frameworks and Libraries](#frameworks-and-libraries)
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

## `The Cascade Principle`

**CSS** stands for Cascading Style Sheets. The cascade is one of its fundamental principles. When multiple styles target the same element, the one that appears last in the stylesheet will take precedence, assuming they have the same specificity. These are the rules of the Cascade Principle:

1. **Origin and Importance**:

   - Styles can come from various sources: user agent styles (default browser styles), user styles, and author styles (styles written by the website developer).
   - There's a hierarchy of importance: author styles typically override user and user agent styles. However, users can force their styles to take precedence using **!important**.

2. **Specificity:** When multiple styles target the same element, CSS uses specificity to determine which style to apply. **VERY IMPORTANT**: High specificity overrides low specificity. In other words, the browser will choose which of two rules for the same element to apply based on which one has higher specificity. Specificity is calculated based on the types of selectors used:

   - **Inline styles: (e.g., style="color: red;" in HTML)** have the highest specificity. These will be followed regardless of other rules affecting them in the external styles.css file.
   - **ID selectors (e.g., #myID)**: have higher specificity than class, attribute, and pseudo-class selectors (e.g., .myClass).
   - **Class, attribute, and pseudo-class selectors**: have higher specificity than type selectors (e.g., div). If two selectors have the same specificity, the one that appears last in the stylesheet will take precedence.

3. **Source Order**:

   - If specificity is the same, the order in which the styles are declared matters. The latter declaration will override the earlier ones. This is why the order of rules in a stylesheet can affect the final appearance of a page. **The lower the style in the styles.css file, the higher its specificity**.

4. **Inheritance**:

   - Some CSS properties are inherited from parent elements to their children, meaning child elements get the computed style of their parent unless otherwise specified. For example, if you set the color property on a div, its text content and any child elements will inherit that color, unless you've set a different color on the child.

5. **Universal Selector and Importance**:
   - **The universal selector (\*)**: has the lowest specificity and will select all elements.
   - **The !important declaration**: can be added to any CSS property value to give it higher importance. If used, it will override other styles, regardless of specificity. However, its overuse is discouraged as it can make stylesheets harder to understand and maintain.

In summary, the cascade in CSS is a set of rules that browsers use to determine which styles to apply to an element. It takes into account the source of the style, its specificity, its order in the stylesheet, inheritance, and any importance applied to it. Understanding the cascade is crucial for effectively styling web pages and resolving any style conflicts that may arise.

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

There are two main color attributes: **color** and **background-color**. They have a number of values that will be listed in the appropriate sections below.

1. **color**: sets the color of text in an element.
1. **background-color**: sets the color of the background of the element.

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

- **RGB**: Stands for Red, Green, Blue (RGB). A color mixing mode using Red, Green and Blue values from 0-255 to generate a color: rgb(255,248,220). Pure white is rgb(255,255,255)

**Note**: Due to the different systems of color used by CSS, it can be of great help to use a [color calculator](https://www.tydac.ch/color/)

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

While basic selectors like type, class, and ID are commonly used, CSS offers a range of advanced selectors that provide powerful capabilities for targeting specific elements based on their relationships, attributes, and states.

### `Child and Descendant Selectors`

- **Child Selector**: Targets an element that is a direct child of another specific element.

```css
div > p {
  color: red;
}
```

- **Descendant Selector**: Targets an element that is a descendant of another specific element, not just a direct child.

```css
div p {
  color: blue;
}
```

### `Adjacent Sibling Selector`

Targets an element that is directly after another specific element, and both share the same parent.

```css
h2 + p {
  font-weight: bold;
}
```

### `General Sibling Selector`

Targets an element that follows another specific element, and both share the same parent (not necessarily immediately after).

```css
h2 ~ p {
  font-style: italic;
}
```

### `Attribute Selectors`

Targets elements based on their attributes and attribute values.

- **Presence of an attribute**:

```css
input[type] {
  border: 1px solid black;
}
```

- **Exact attribute value**:

```css
input[type="text"] {
  background-color: yellow;
}
```

- **Attribute value starting with a specific string**:

```css
a[href^="https://"]
{
  font-weight: bold;
}
```

- **Attribute value ending with a specific string**:

```css
a[href$=".pdf"] {
  color: red;
}
```

- **Attribute value containing a specific substring**:

```css
a[href*="example"] {
  text-decoration: underline;
}
```

### `Pseudo-Classes`

Pseudo-classes target elements based on their state or position.

- **:hover**: is the state of the element when the mouse hovers over it.

```css
button {
  background-color: blue; /* the normal background color of the button */
}

button:hover {
  background-color: darkblue; /* the button's background color will now turn darkblue when you move the mouse on to it*/
}
```

- **:active**: The state of the element when the mouse actually clicks on it.

```css
button {
  background-color: blue; /* the normal background color of the button */
}

button:hover {
  background-color: darkblue; /* the button's background color will now turn darkblue when you move the mouse on to it*/
}

button:active {
  background-color: red; /* the button's background color will now turn red when you click on it*/
}
```

- **first-child**: The first element nested within a parent element.

```css
ul > li:first-child {
  font-weight: bold;
}
```

- **last-child**: The last element nested within a parent element.

```css
ul > li:last-child {
  font-style: italic;
}
```

- **:nth-child(n)**: The nth element nested within a parent element. For example the :nth-child(3) is the 3rd element nested within a parent element.

```css
ul > li:nth-child(3) {
  text-decoration: underline;
}
```

### `Pseudo-elements`

Pseudo-elements target specific parts of an element, allowing you to style them.

- **::first-line**: is the first line of the parent element.

```css
p::first-line {
  font-weight: bold;
}
```

- **::first-letter**: is the first letter of the parent element.

```css
p::first-letter {
  font-size: 2em;
}
```

- **::before**: inserts content **before** the content of the selected element.
- **::after**: inserts content **before** the content of the selected element.

```css
p::before {
  /* inserts the word "Note" with a font-weight of bold BEFORE the content of the p element */
  content: "Note: ";
  font-weight: bold;
}

p::after {
  /* inserts fullstop AFTER the content of the p element */
  content: ".";
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Transitions`

Transitions bring life to web designs, allowing elements to transition more smoothly and creating a more dynamic user experience.

### `Transitions`

Transitions allow property changes in CSS values to occur smoothly over a specified duration.

- **transition-property**: Specifies the CSS attribute to which the transition will be applied.
- **transition-duration**: Determines how long the transition will take.
- **transition-timing-function**: Describes how intermediate values for the transition are calculated. **ease-in**, **ease-out** and **ease-in-out** are the most common values.
- **transition-delay**: Specifies when the transition will start.

```css
button {
  transition-property: background-color;
  transition-duration: 0.5s; /* 0.5 seconds */
  transition-timing-function: ease-in-out;
  transition-delay: 1s; /* 1 second delay */
}
```

We can do it shorthand:

```css
button {
  transition: background-color 0.5s ease-in-out 1s;
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Responsive Design`

Responsive design ensures that web content looks and functions well on a variety of devices and screen sizes. With the proliferation of devices, from desktops to smartphones to tablets, it's essential to design websites that adapt seamlessly.

### `The viewport`

The viewport is the visible area of a web page on a display device. It represents the part of the web page that is currently visible to the user. The size of the viewport can vary based on the device being used, its screen size, and its resolution.

**Why is the viewport important?**

1. **Different Devices, Different Sizes**: With the proliferation of devices like smartphones, tablets, laptops, and desktop monitors, web content can be viewed on screens of vastly different sizes and resolutions. The viewport helps designers and developers ensure that content is displayed correctly across these devices.
1. **Responsive Web Design**: The concept of the viewport is crucial for responsive web design. Responsive design aims to make websites look and function well on a variety of devices and screen sizes. By using relative units and media queries, developers can create layouts that adapt to different viewport sizes.
1. **User Experience**: A correctly set viewport ensures that users don't have to excessively zoom in or out or scroll horizontally to view content, leading to a better user experience.

**Viewport Meta Tag**: On mobile devices, web pages were initially scaled down to fit the screen due to the smaller screen sizes. This often made text too small to read and required users to zoom in. To overcome this, the viewport meta tag was introduced. The viewport meta tag gives the browser instructions on how to control the page's dimensions and scaling. Here are the two main attributes for use in the viewport meta tag:

**width=device-width**: This instructs the page to match the screen's width in device-independent pixels.
**initial-scale=1.0**: This defines the initial zoom level when the page is first loaded.

By using the viewport meta tag, developers can ensure that their web pages are displayed correctly on mobile devices, taking full advantage of the available screen real estate.

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0">

```

### `Media Queries`

Media queries allow you to apply CSS rules based on device characteristics, most commonly the device's width. Media queries consist of a media type and one or more conditions that check for the specific characteristics of a device. When the conditions are met, the corresponding block of CSS rules is applied.

Legal media types for media queries consist of these:

**all**: Suitable for all devices.

- **print**: Intended for paged material and documents viewed on a screen in print preview mode. This can include printers or devices with screens that are designed to mimic the appearance of paper.
- **screen**: Intended primarily for screens (color computer screens).
- **speech**: Intended for speech synthesizers (e.g., screen readers).

**Note**: In effect, the main media type you will be using for media queries especially in responsive design is **screen**.

**Using Media Queries**

- **Basic syntax**: Nest the usual css syntax within a media query:

```css
@media screen and (max-width: 600px) {
  /* CSS rules for screens smaller than or equal to 600px */
}
```

A typical example would be this:

```css
/* Default CSS rules for larger screens */
body {
  background-color: lightblue;
  font-size: 20px;
}

/* Media query for screens smaller than or equal to 600px */
@media screen and (max-width: 600px) {
  body {
    background-color: lightcoral;
    font-size: 16px;
  }

  h1 {
    font-size: 24px;
  }

  p {
    padding: 10px;
  }
}
```

- **Multiple conditions**:

```css
@media (min-width: 600px) and (max-width: 900px) {
  /* CSS rules for screens between 600px and 900px */
}
```

**Note**: Media queries should be placed at the bottom of the styles.css file to ensure that they have the highest specificity.

### `Fluid Grids`

Instead of using fixed widths (like pixels), use relative units like percentages. This ensures that your layout adapts to the screen's width.

```css
.container {
  width: 90%; /* Takes up 90% of its parent's width */
  max-width: 1200px; /* But won't exceed 1200px */
}
```

### `Flexible Images`

Ensure images scale and resize within their containing elements.

```css
img {
  max-width: 100%; /* Ensures images don't scale beyond their original size */
  height: auto; /* Maintains the image's aspect ratio */
}
```

### `Responsive Typography`

Ensure that text remains readable across devices by using relative units like em or [rem](https://www.freecodecamp.org/news/what-is-rem-in-css/), and by adjusting font sizes within media queries.

```css
@media screen and (max-width: 600px) {
  body {
    font-size: 16px;
  }
}
```

### `Hide and Show Content`

Sometimes, certain content might be more relevant on desktop than on mobile, or vice versa. Media queries can help show or hide content based on the device's width.

```css
/* Hide on screens smaller than 600px */
@media screen and (max-width: 600px) {
  .desktop-only {
    display: none;
  }
}
```

### `CSS Flexbox and Grid`

CSS flexbox and grid are two extremely powerful tools for responsive design. Due to their power and importance they will be treated in their own individual sections below.

**[Try it here](https://jsfiddle.net/)**

---

## `Flexbox`

Flexbox, or the Flexible Box Layout, is a layout model in CSS that allows items within a container to be dynamically arranged in any direction and can have flexible sizes. It's particularly useful for designing complex layout structures with a clean and predictable way, especially when the sizes of your items are unknown or dynamic.

### `Basics of Flexbox`

To start using flexbox, you need to define a container as a flex container with **display: flex** or **display: inline-flex** (if you want the container to behave like an inline element). That container, becomes a **flexbox** in which all child elements become **flex items**.

### `The Axes of Flexbox`

1. **Main Axis**: The primary axis along which flex items are laid out. The direction of the main axis is determined by the flex-direction property.

   - Possible values for flex-direction that define the main axis are:
     - **row** (default): left to right in horizontal layouts.
     - **row-reverse**: right to left in horizontal layouts.
     - **column**: top to bottom in vertical layouts.
     - **column-reverse**: bottom to top in vertical layouts.
   - The main start and main end points are the points where items start and end along the main axis.
   - The main size of a flex item refers to its width or height, whichever is in the main dimension (e.g., width in a row direction, height in a column direction).

2. **Cross Axis**:
   - The axis perpendicular to the main axis. Its direction depends on the main axis direction.
   - The **cross start** and **cross end** points are the points where items start and end along the cross axis.
   - **The cross size** of a flex item refers to its width or height in the cross dimension (e.g., height in a row direction, width in a column direction).
   - Alignment along the cross axis is controlled by properties like **align-items** (for all items in the container) and **align-self** (for individual items).

### `Setting Up Flexbox`

To use flexbox, you first need to define a container as a flex container. Once you do this, all direct children become flex items.

```css
.container {
  display: flex;
}
```

### `Direction of Items: flex-direction`

This attribute defines the direction of the main axis.

```css
.container {
  flex-direction: row; /* Default. Main axis is horizontal */
}
.container {
  flex-direction: column; /* Main axis is vertical */
}
```

### `Wrapping Items: flex-wrap`

By default, items will try to fit onto one line. You can change that and allow the items to wrap as needed with this attribute:

```css
.container {
  flex-wrap: wrap;
}
```

### `Aligning and Justifying Content`

- Horizontal alignment (main axis): **justify-content**
- Vertical alignment (cross axis): **align-items**

```css
.container {
  justify-content: center; /* centers items along the main axis */
}
```

```css
.container {
  align-items: center; /* centers items along the cross axis */
}
```

- You can combine both to align and justify content both vertically and horizontally.

```css
.container {
  align-items: center; /* centers items along the cross axis */
  justify-content: center; /* centers items along the main axis */
}
```

### `Flex Items and their Attributes`

Once you define your flexbox, all elements inside it become **flex items**. You can manipulate them with these attributes.

- Growing and Shrinking Items: **flex-grow** and **flex-shrink**

```css
.item {
  flex-grow: 1; /* allows the item to grow */
  flex-shrink: 0; /* prevents the item from shrinking */
}
```

- Setting the Base Size: **flex-basis**

```css
.item {
  flex-basis: 200px; /* sets the default size of an item */
}
```

- Aligning Single Items: **align-self**

```css
.item {
  align-self: flex-start; /* aligns this item at the start of the cross axis */
}
```

### `Nested Flex Containers`

Flex containers can be nested inside other flex containers, allowing for more intricate layouts (this gets complicated).

```css
.outer-container {
  display: flex;
}

.inner-container {
  display: flex;
  flex-direction: column;
}
```

**Notes**:

1. You can nest flexboxes inside flexboxes.
1. While flexbox is powerful tool, it can get complicated quickly. It is often advisable to plan your flexboxes and items with a resources as in the links below. These will help you design your layout and generate the CSS automatically for you.

**[Try it here](https://jsfiddle.net/)**

---

## `Grid`

CSS Grid is a two-dimensional layout system that provides a more detailed and controlled way to design web layouts. With Grid, you can design layouts for both columns and rows simultaneously, making it a powerful tool for modern web design.

### `Setting up Grid`

Like flexbox, to use CSS Grid, you first need to define a container as a grid container. Once you do this, all direct children become grid items.

```css
.container {
  display: grid;
}
```

### `Defining Columns and Rows`

You can define the size and number of columns and rows using **grid-template-columns** and **grid-template-rows**.

**Note**: The common unit for the values of these attributes is **fr** (fractional unit). It is a unit of measurement that represents a fraction of the available space in a grid container. The **fr** unit allows you to divide the grid container into proportional columns or rows, making it easier to create responsive layouts without relying on fixed units like pixels or percentages. However, you can also combine them with pixes and percentages.

```css
.container {
  grid-template-columns: 1fr 2fr 1fr; /* Creates 3 columns */
  grid-template-rows: auto 100px; /* Creates 2 rows */
}
```

### `Gap Between Columns and Rows`

It is often desirable to insert a gap between columns and rows. To do so use **grid-gap**, **grid-column-gap**, and **grid-row-gap**.

```css
.container {
  grid-template-columns: 1fr 2fr 1fr; /* Creates 3 columns */
  grid-template-rows: auto 100px; /* Creates 2 rows */
  grid-gap: 20px; /* Gap between both rows and columns */
  grid-column-gap: 15px; /* Gap between columns */
  grid-row-gap: 25px; /* Gap between rows */
}
```

### `Placing items`

Items in your grid container are automatically grid items. Grid items can be placed in specific columns and rows using grid-column and grid-row.

```css
/* This item is assumed to be in the grid container defined above */
.item1 {
  grid-column: 1 / 3; /* Spans from the start of the 1st column to the start of the 3rd column */
  grid-row: 1 / 2; /* Spans the first row */
}
```

### `Named Grid Lines`

You can name your grid lines and reference them when placing items.

```css
.container {
  grid-template-columns: [start] 1fr [mid] 2fr [end];
}

.item1 {
  grid-column: start / mid; /* Spans from the "start" line to the "mid" line */
}
```

### `Auto-placement`

If you don't specify where items should go, Grid will auto-place them for you.

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  /* Items will be placed in columns automatically */
}
```

### `Alignment and Justification`

- Align items vertically: **align-items**
- Justify items horizontally: **justify-items**

```css
.container {
  align-items: start; /* Other values: end, center, stretch */
}
```

```css
.container {
  justify-items: start; /* Other values: end, center, stretch */
}
```

### `Nested Grids`

As in flexbox, You can nest grid containers in grid containers. But be careful as it can get very complicated.

```css
.outer-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.inner-container {
  display: grid;
  grid-template-rows: auto auto;
}
```

**[Try it here](https://jsfiddle.net/)**

---

## `Web UI Style Guide`

HTML and CSS make it very easy to build graphical user interfaces but perhaps the biggest challenge is to design a style that is clean and consistent with current web design idioms. Here is a basic style guide to get you going.

### `Typography`

- **Font Choices**: Stick to 2-3 fonts for your entire website. One for headings and one for body text. Optionally, a third for accents.
  - **Example**: Use a bold sans-serif font like "Roboto" for headings and a readable serif like "Georgia" for body text.
- **Font Sizes**: Ensure text is readable across devices.
  - **Headings**: H1 > H2 > H3 > H4 > H5 > H6
  - **Body Text**: Typically 16px for desktop and mobile.
- **Line Spacing**: Aim for 1.5x the font size for body text for better readability.

### `Colors`

- **Palette**: Choose a primary color palette of 2-3 main colors. Add a secondary palette for accents and feedback (like errors or success messages).
- **Contrast**: Ensure text contrasts well against its background. Tools like [Contrast Checker](https://colourcontrast.cc/) can help.
- **Feedback Colors**: Use colors like red for errors, green for success, and yellow for warnings.

### `Spacing and Layout`

- **Whitespace**: Use whitespace generously to separate elements and group related content.
- **Alignment**: Align elements consistently. If you're center-aligning your headers, do it throughout your site.
- **Grid Systems**: Use a grid system (like those provided by Bootstrap or CSS Grid) to create balanced layouts.

### `Buttons`

- **Size**: Buttons should be large enough to be easily clickable, especially on mobile devices.
- **Colors**: Use a distinct color from your palette that stands out but still fits within your design.
- **Text**: Button text should be clear and action-oriented (e.g., "Sign Up," "Learn More").

### `Forms`

- **Labels**: Always label your form fields. Placeholders are not a replacement for labels.
- **Feedback**: Provide immediate feedback, especially if there's an error in form submission.
- **Buttons**: The primary action button (like "Submit") should be more prominent than secondary actions (like "Cancel").

### `Images and Icons`

- **Quality**: Use high-resolution images but ensure they're optimized for the web to maintain fast load times.
- **Consistency**: If you're using flat icons, don't mix them with 3D icons. Maintain a consistent style.

### `Responsiveness`

- **Mobile-First**: Design for mobile devices first and then scale up for tablets and desktops.
- **Breakpoints**: Use breakpoints in your CSS to ensure your design looks good on all devices.

### `Interactivity`

- **Hover States**: Provide visual feedback for interactive elements like buttons and links when hovered over.
- **Transitions**: Use subtle transitions for interactive elements to smooth out the user experience.

### `General Tips`

- **Consistency**: This is key. Ensure that your design is consistent across all pages.
- **Test**: Regularly test your design on different devices and browsers to ensure compatibility.
- **Stay Updated**: Design trends evolve. Stay updated with the latest trends, but don't feel pressured to incorporate every new thing.

### `Material Design`

Material Design is a design language developed by Google in 2014. It provides guidelines for the visual, motion, and interaction design of applications and websites across different devices and platforms. Material Design is inspired by the physical world and its textures, including how they reflect light and cast shadows. Here are some key principles and characteristics of Material Design:

1. **Tangible Surfaces**: Material Design treats user interfaces as if they were made of physical "material" – sheets of paper or layers of card. These materials can have varying elevations, which define their relationships to one another.
1. **Bold, Graphic, and Intentional**: Typography, grids, space, scale, color, and imagery are used deliberately to guide user attention and ensure a consistent experience across devices.
1. **Motion Provides Meaning**: Motion in Material Design is not just for aesthetics; it serves to guide the user's attention, provide feedback, and enhance continuity between different states of an interface. Transitions are smooth and purposeful.
1. **Material as a Metaphor**: The metaphor of material reflects the idea of a seamless integration of technology and life. It's a bridge between the classic principles of good design and the innovation and possibilities of modern technology.
1. **Adaptive Design**: Material Design is developed with a mobile-first approach but is intended to adapt seamlessly to different device sizes, be it mobile, tablet, or desktop.
1. **Color**: Material Design promotes the use of bold and vibrant colors. It provides a specific color palette to choose from, ensuring consistency and readability.
1. **Icons and Imagery**: Material Design uses specific guidelines for icons to ensure they are simple, clear, and communicative. The use of imagery is also guided by principles to ensure they integrate well with the material interface.
1. **Components**: Material Design provides guidelines for a wide range of components, from buttons and cards to dialogs and sliders, ensuring a consistent look and feel across applications.
1. **Guidelines and Tools**: Google provides extensive documentation, resources, and tools for developers and designers to implement Material Design in their applications. This includes component libraries, icons, color tools, and more.
1. **Continuous Evolution**: Material Design has evolved since its inception, with Google continuously updating the guidelines based on feedback and technological advancements.

In essence, Material Design is a comprehensive guide for visual, motion, and interaction design across platforms and devices, aiming to create a consistent user experience backed by open-source tools and resources provided by Google.

The [Material Design Guide](https://m3.material.io/)

---

---

## `Frameworks and Libraries`

CSS frameworks and libraries provide pre-written CSS code to help speed up the web development process. They offer consistent and responsive grid systems, pre-styled components, and utility classes that can significantly reduce the amount of CSS you need to write.

### `Bootstrap`

Bootstrap is a popular open-source front-end framework used for designing websites and web applications. It provides developers and designers with a collection of HTML, CSS, and JavaScript components, making it easier to create responsive and mobile-first projects on the web. Here are some key points about Bootstrap:

1. **Responsive Design**: Bootstrap includes a responsive grid system that automatically adjusts and resizes web content based on different device screen sizes, from desktops to tablets to mobile phones.
1. **Pre-styled Components**: Bootstrap comes with a wide range of pre-designed components such as navigation bars, modals, carousels, and alerts, which can be easily integrated into web projects.
1. **Customizable**: While Bootstrap provides default styles, they can be easily customized to fit the design needs of a project.
1. **JavaScript Plugins**: Bootstrap includes several jQuery plugins that add interactivity and additional functionality to components, such as dropdowns, tooltips, and modals.
1. **Consistency**: Bootstrap was initially developed by Twitter to ensure consistency across internal tools. This consistency has been maintained as a core feature, ensuring that elements and components have a uniform look and feel.
1. **Community and Ecosystem**: Due to its popularity, there's a vast community around Bootstrap. This means a lot of resources, third-party plugins, themes, and extensions are available.
1. **Regular Updates**: Bootstrap has seen several versions since its inception, with each version bringing improvements, new features, and ensuring it stays up-to-date with modern web design practices.
1. **Flexibility**: Bootstrap can be used as just a CSS framework or combined with its JavaScript functionality. It can be integrated with other JavaScript frameworks and libraries like React, Angular, and Vue.js.

In summary, Bootstrap is a comprehensive toolkit for web development that simplifies the process of building modern, responsive websites and applications. It allows developers to create professional-looking sites quickly without starting from scratch.

Get [Bootstrap](https://getbootstrap.com/)

### `Bulma`

Bulma is a modern, open-source CSS framework based on the Flexbox layout model. It provides a clean syntax and a set of responsive modifiers, making it easy to create responsive web designs. Here are some key features and characteristics of Bulma:

1. **Flexbox Based**: Bulma is built entirely on Flexbox, making it easy to design complex layout structures with a clean and simple syntax.
1. **Responsive**: Like most modern CSS frameworks, Bulma comes with a responsive grid system that can be easily customized to fit various screen sizes and devices.
1. **Modular**: Bulma is modular, meaning you can import only the components you need, reducing the overall size of your CSS.
1. **No JavaScript**: Unlike some other frameworks, Bulma doesn't come with any JavaScript included. This means it's purely a CSS framework, and any interactivity needs to be added separately.
1. **Easy Customization**: Bulma uses Sass (a popular CSS preprocessor), which allows for easy customization of the framework using variables.
1. **Modern Design**: Bulma provides a set of modern, sleek components that can be used to build stylish websites and web applications.
1. **Active Community**: Bulma has an active community, which means regular updates, a plethora of resources, plugins, extensions, and third-party packages.
1. **Semantic**: Bulma's syntax is semantic and easy to understand, making it straightforward for developers to grasp and work with.
1. **Consistent**: The framework provides a consistent look and feel for elements and components, ensuring a uniform appearance across the website or application.

In summary, Bulma is a lightweight, flexible, and modern CSS framework that offers an alternative to other popular frameworks like Bootstrap. It's particularly favored by developers who prefer working with Flexbox and want a pure CSS solution without the overhead of JavaScript components.

Get [Bulma](https://bulma.io/)

### `Tailwind CSS`

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Instead of providing a set of predefined components, Tailwind CSS offers low-level utility classes that allow developers to build unique designs without ever leaving their HTML. Here are some key features and characteristics of Tailwind CSS:

1. **Utility-First**: Tailwind CSS promotes a utility-first approach, where you apply styling directly in your HTML using utility classes. This approach can lead to faster development and more maintainable code, as it reduces the need for custom CSS.
1. **Customizable**: Tailwind's configuration file allows developers to customize the framework to fit their project's design requirements. You can define your color palette, typography, spacing, breakpoints, and more.
1. **Responsive Design**: Tailwind provides utilities for building responsive interfaces right out of the box. By simply prefixing utilities with breakpoint names, you can apply styles conditionally at different screen sizes.
1. **Performance**: Since Tailwind generates thousands of utility classes, the resultant CSS can be large. However, in combination with tools like PurgeCSS, unused styles can be removed automatically, resulting in smaller, optimized stylesheets.
1. **Plugin System**: Tailwind CSS has a plugin system that allows developers to extend the framework with their utilities, components, or even custom variants.
1. **Interactivity**: With the introduction of the @apply directive, Tailwind allows developers to extract component classes from repeated utility patterns, making it easier to manage and maintain styles.
1. **Community and Ecosystem**: Tailwind has a vibrant and growing community. There are numerous plugins, extensions, and resources available, making it easier for developers to achieve desired functionalities and designs.
1. **Documentation**: Tailwind CSS offers comprehensive documentation that includes setup guides, full utility class references, and interactive examples.
1. **Integration**: Tailwind can be integrated into various build tools and frameworks, including Webpack, Laravel Mix, Vue.js, React, and more.

In summary, Tailwind CSS provides developers with the tools to create custom designs quickly without the constraints of a traditional component-based framework. Its utility-first approach encourages the creation of reusable components without writing custom CSS, leading to faster development and cleaner code.

Get [Tailwind CSS](https://tailwindcss.com/)

---

## `Useful Links`

### `Docs`

- [devdocs](https://devdocs.io/css)
- [MDN CSS Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)

### `Frameworks and Libraries`

- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/)
- [Tailwind CSS](https://tailwindcss.com/)

### `Style Guide`

- [Material Design Guide](https://m3.material.io/)

### `Color Tools`

- [Adobe color tool and generator](https://color.adobe.com/)
- [Coolors - palette generator](https://coolors.co/)
- [Color wheel and calculator](https://www.canva.com/colors/color-wheel/)
- [Contrast Checker](https://colourcontrast.cc/)
- [Palette generator](https://paletton.com/)

### `Flex`

- [CSS Flexbox Generator](https://www.cssportal.com/css-flexbox-generator/)
- [CSS Flex Layout](https://angrytools.com/css-flex/)
- [Flex Calculator](https://www.flexulator.com/)

### `Grid`

- [Grid Layout Generator](https://grid.layoutit.com/)

### `Typography Tools`

- [Type scale - a visual calculator](https://typescale.com/)
- [Fluid typography scale](https://royalfig.github.io/fluid-typography-calculator/)
