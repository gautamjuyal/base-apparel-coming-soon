# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

Base apparel coming soon page from frontendmentorio. Used SCSS for styling and JavaScript regular expression for form validation.
### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## My process

Created the page using Semantic HTML and styled using SCSS and CSS media queries. Also SCSS mixins were helpful in creating style templates for components.

The process for form validation was pretty simple.

1. Turned off default behaviour for the submit button so that it doesn't send the request as soon as the button was pressed.

2. Defined a new regular expression (particular expression for email validation taken from internet forums) and tested the user input for the expression.

3. If the user input passes the test. All Good, no changes to the styles are made. Any styles if previously active are reverted. If it fails the test, error styles are applied.
### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Vanilla JavaScript

### What I learned

- Use of SCSS mixins.
- Use of JavaScript regular expressions.
- Form Validationn
- Improved upon and emphasis on Mobile responsiveness




