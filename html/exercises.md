# `HTML Exercises`

[Return to main page](../README.md)

**Important Notes:**

1. There is a difference between an element and a tag.

- An element contains a set of tags with attributes and their values;
- a tag is a set of characters opening and closing an element.

Example:

```html
<a href="https://developer.mozilla.org/">Mozilla Developer Resources</a>
```

`<a></a>`- These are tags;  
`href` - This is an attribute;  
`"https://developer.mozilla.org/"` - this is the value of the attribute href;  
`<a href="https://developer.mozilla.org/">Mozilla Developer Resources</a>` - This is the entire element.

2. Tags can be both **container tags** and **self-closing tags**.

- A container tag needs both opening and closing tags to enclose an element. The closing tag starts with a forward slash: `<p></p>`.
- A self-closing tag doesn't contain an element so it doesn't need an opening or closing tag. It can simply be declared as a closing tag:

```html
<img
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
/>
```

In modern HTML5, you don't need the forward slash at the end of the self-closing tag (although it is still advisable). This is also valid in HTML5:

```html
<img
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
/>
```

3. Some attributes have values, some do not.

- src in this example has a
  link as a value:

```html
<img
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
/>
```

- in this example of an a element, the attribute download does not have a value, it just downloads the file when you click on it:

```html
<a
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
  download
  >Download the image</a
>
```

4. Attributes do not have an order, and can be in any order from left to right, but if you put them in alphabetical order it will be much easier to work out if you're missing any.

## `Question 1 - The DOCTYPE declaration`

Insert a DOCTYPE declaration at the beginning of your new index.html document.

Hints:

1. Emmet abbreviation: !!!

Solution:

```html
<!DOCTYPE html>
```

---

## `Question 2 - The html tag`

Insert an html tag into which to put the rest of the document.

Hints:

1. The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.

Solution:

```html
<!DOCTYPE html>
<html></html>
```

---

## `Question 3 - The head tag`

Insert a head element at the top of your html element.

Hints:

1. The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.

Solution:

```html
<!DOCTYPE html>
<html>
  <head> </head>
</html>
```

---

## `Question 3 - The meta tag`

Insert two meta tags at the top of your head element. Add the following attributes with values in your meta tags:

1. 1st meta tag: charset="UTF-8";
1. 2nd meta tag: name="viewport" content="width=device-width, initial-scale=1.0"

Hints:

1. meta is a self-closing tag.

Solution:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  </head>
</html>
```

---

## `Question 4 - The title tag`

Insert a title element under your meta tags. The title tag should contain the text: Roast Leg of Lamb.

Hints:

1. The title element sets the title of your web page in the title bar of the window.

Solution:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" />
    name="viewport"
    <title>Roast Leg of Lamb</title>
  </head>
</html>
```

---

## `Question 5 - The body tag`

Insert a body element under the head element.

Hints:

1. The body element represents the content of an HTML document. There can be only one body element in a document.

Solution:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Roast Leg of Lamb</title>
  </head>
  <body></body>
</html>
```

---

## `Question 6 - Insert the initial boilerplate with an emmet declaration`

All the code you've inputted so far is common to virtually all html pages and is therefore called **boilerplate** that is a sort of template for further code. Delete all that you've done so far and recreate it all using an emmet declaration. Remember to fill the title element with the text in Question 4.

Hints:

1. The emmet declaration to insert the basic boilerplate of an html document is: !
1. Remember to change the content to the title element.

Solution:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Roast Leg of Lamb</title>
  </head>
  <body></body>
</html>
```

## `Question 7 - Insert additional meta tags in the boilerplate code`

Your boilerplate code is missing a number of additional meta tags that are nice to have. Please insert the following meta tags with their values under the other meta tags in your boilerplate:

1. 1st meta tag: content="Jamie Oliver's recipe for a lamb of roast leg with amplifications" name="content";
1. 1st meta tag: content="your name" name="author" ;

Solution:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta
      content="Jamie Oliver's roast leg of lamb with some amplifications"
      name="content"
    />
    <!-- In the content attribute below, write your own name -->
    <meta content="" name="author" />
    <title>Roast Leg of Lamb</title>
  </head>
  <body></body>
</html>
```

---

## `Question 8 - Create and link your css file`

Create your css file in your root folder and link it in the head element just above the title element.

Hints:

1. Different operating systems have different ways of expressing the path. Make sure that the path in your link points correctly to your css file. This documentation was written on linux and the path format reflects the one on that OS.

Solution:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta
      content="Jamie Oliver's roast leg of lamb with some amplifications"
      name="content"
    />
    <!-- In the content attribute below, write your own name -->
    <meta content="" name="author" />
    <link href="/styles.css" rel="stylesheet" type="text/css" />
    <title>Roast Leg of Lamb</title>
  </head>
  <body></body>
</html>
```

---

## `Question 9 - Create and link your javascript file`

Create your javascript file in your root folder and link it in the head element just above the title element.

Hints:

1. Different operating systems have different ways of expressing the path. Make sure that the path in your link points correctly to your javascript file. This documentation was written on linux and the path format reflects the one on that OS.

Solution:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta
      content="Jamie Oliver's roast leg of lamb with some amplifications"
      name="content"
    />
    <!-- In the content attribute below, write your own name -->
    <meta content="" name="author" />
    <link href="/styles.css" rel="stylesheet" type="text/css" />
    <script src="script.js"></script>
    <title>Roast Leg of Lamb</title>
  </head>
  <body></body>
</html>
```

---
