# A design system for more efficient development

## Motivation

I often end up spending too much of my developing time in considerations regarding things like font sizes, line heights, palettes etc. Furthermore, I've found that every time I use some kind of design system which is defined in advance, the design ends up looking much more consistent and better.

## Systems and Reset

The `default-styles.css` stylesheet includes design systems for the following aspects of CSS:

1. Font size
2. Font weight
3. Line height
4. Color
5. Margin
6. Padding
7. Width
8. Height
9. Box shadows
10. Border radius
11. Border width
12. Opacity

In addition to the above mentioned systems, I've incorporated a **CSS reset** based on [Richard Clark's HTML5 reset](http://html5doctor.com/html-5-reset-stylesheet/) and a **Box Model** based on [the Universal Box Sizing with Inheritance](https://css-tricks.com/box-sizing/#universal-box-sizing-with-inheritance).

## Browser support

Since the design system is based on CSS variables. One thing to note is that CSS bariables [lack native IE support](https://caniuse.com/css-variables). However, the [css-vars-ponyfill](https://jhildenbiddle.github.io/css-vars-ponyfill/#/)
