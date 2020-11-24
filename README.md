[![npm version](https://badge.fury.io/js/systemized-styling.svg)](https://badge.fury.io/js/systemized-styling)

# Systemized Styling - An NPM package for faster development

## Introduction

I often end up spending too much of my developing time in considerations regarding things like font sizes, line heights, palettes etc. Furthermore, I've found that every time I use some kind of design system which is defined in advance, the design ends up looking much more consistent and better.

In order to speed up and improve the styling process of any project I've created the `systemized-styling` package. As I myself mostly use React for frontend development, this package is created with projects initiated through `create-react-app` in mind (as its webpack setup allows for imorting .css files correctly). However, any project with a correct [webpack style-loader and css-loader](https://webpack.js.org/loaders/style-loader/) setup could use this package. If you don't want to overcomplicate things - it's totally fine just picking the `default-styles` stylesheet and any of the `palette.css` stylesheets that you want and simply use them in your project. You don't have to use the NPM package.

## Systems and Resets

The `systemized-styling` package includes design systems for the following aspects of CSS:

1. Font weight
2. Font weight
3. Line height
4. Colors
5. Margin
6. Padding
7. Breakpoints
8. Width
9. Height
10. Box shadows
11. Border radius
12. Border width
13. Opacity

In addition to the above mentioned systems, I've incorporated a **CSS reset** based on [Richard Clark's HTML5 reset](http://html5doctor.com/html-5-reset-stylesheet/) and a **Box Model** based on [the Universal Box Sizing with Inheritance](https://css-tricks.com/box-sizing/#universal-box-sizing-with-inheritance).

### The palette system

The coloring system is based on 14 different color palettes. Each palette is divided into three parts: _primary_, _neutral_ and _supporting_. Furthermore, each color in the palettes come in 10 different variations. The reason why is that you probably need more colors than you might think - a color palette needs to be comprehensive in order to create those small nuances that makes the design beautiful.

## Install

This repository is distributed with npm. After [installing npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), you can install `systemized styling` with the following command:

```bash
$ npm install --save systemized-styling
```

## Example initiation

The styles are applied through the function exported from the javascript module (default export). It takes one argument - the number of the palette (a number between 1-14) which you wish to use. Call the function with you palette number to apply the default styles and the palette.

### React example

Here's an example of how to apply the styles in a `React` application's `App` component.

```jsx
import React from 'react';
import applySystemizedStyling from 'systemized-styling';

applySystemizedStyling(3); // Applying systemized styling with palette number 3

function App() {
  return (
  // ....
  )
}
```

## Example usage

Once the styles have been applied through calling the `applySystemizedStyling` function, you now have access to _css variables_ which you can use in your styling. For example:

```css
.card__paragraph {
	color: var(--neutral-1);
	line-height: var(--lh-large);
}
```

For a complete overview of the CSS variables available as default styles and in each respective palette, inspect the css files in this package.

## Browser support

Since the design system is based on CSS variables, one thing to note is that CSS variables [lack native IE support](https://caniuse.com/css-variables). However, the [css-vars-ponyfill](https://jhildenbiddle.github.io/css-vars-ponyfill/#/)
