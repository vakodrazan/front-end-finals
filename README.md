# Photograph mockup-to-website project

In this project, I use ***HTML***, ***SASS*** and ***BEM***. Because it is based on html, the use of element does count much. Also, it is responsive design.

First things first, let's get you set up. You will need the following…

## Dependencies

- Node.js
- Figma
- Figma Font Helper

## Install

We'll be using `node-sass` for our Sass compilation. Let's install that by doing:

1. `npm i`

## Getting started

### Design

You can find the design:

- online at [figma.com/Laaqiq-1-Portfolio-detail-Responsive](https://www.figma.com/file/VgF87mULloYb7HZ1EMCRzU/Laaqiq-1-Portfolio-detail-Responsive?node-id=0%3A1) (Recommended)
- by importing the `.fig` file in [the `source_materials` folder](./source_materials/) into your figma app.

### Source files

Have a look in the `source_materials` folder. There you'll find any fonts you need, images that are required by the design work.

Since `WOFF/WOFF2` is more flexible and more suportive, use it in fonts rules.

### Webroot

As with most setups, it's a good idea to isolate all the web-files in the `webroot` folder.
Export all the images, fonts, HTML, JS, and CSS you use to this webroot folder (in the right subfolder of course!).

3. Create a `webroot/index.html` file.

### Sass

We'll be using the `scss` folder for all our Sass files.

4. Create a `scss/index.scss` file, that will act as our manifest Sass file.
5. Build your CSS file once by running the `npm run scss` script.

All your Sass files will be output to the `webroot/css` folder.

### Linking up our styles

6. Link up the new `webroot/css/index.css` stylesheet in your `index.html`

## Development

You'll want to run the `scss:watch` task when you're developing this project.

## Marking & requirements

You have 5 days to convert the design work to a working single webpage. There's a lot to cover here in a week, and we don't expect you to have the entire website done in that time, but it would be great if you could.

So, what is expected then? We're going to be marking most of the things we've learned this year. Here's a list of things we'll be looking at:

- **All the HTML**
  - Your HTML should be clean, accurate, and consistent.
  - Use the right elements for the right job.
  - Structure your HTML nicely.
  - Make sure your HTML is accessible.
  - Make sure your HTML is valid.
  - *Bonus points*: Progressively enhancing your HTML, e.g. using `<picture>` elements with multiple sources.
- **As much Sass as you can**
  - Your Sass should use variables at a minimum, and be extended with mixins, functions, and abstract classes if you can.
  - Your Sass output should be orderly, and expected.
  - Keep your SCSS files clean
  - Add helpful comments to the difficult-to-understand parts.
  - You don't have to style everything within the time-frame. But we want to see completed components where possible.
- **CSS**
  - Add style to elements that the user can focus, hover over, or interact with.
  - Your work should be Mobile-First by default, and Responsive.
  - *Bonus points*: Use Custom Properties if you can.
- **Images**
  - Are you using a CSS `background-image` or an `<img>` in the HTML? Make sure it's for the right reasons.
  - Use the correct image format for each case
  - *Bonus points*: Compress your images
- **Fonts**
  - If you'd like, use a `fonts.google.com`-supplied stylesheet for the fonts, but we really want to see you use your own `@font-face` declarations. Link up the WOFF2 and WOFF formats to your CSS using as many `@font-face` at-rules as you need.
  - Use `local()` functions for locally-installed fonts.
  - Test that your website works without local font support.
  - *Bonus points*: Subset your fonts
- **General**
  - No spelling or grammar mistakes please
  - Test, test, test!
  - Don't feel pressure to complete the entire page, but rather try complete each component you start. **Leave out the bits that look too complex and work on them at the end!**
  - Ensure your commits are frequent and well-described.
- **Advanced**
  - Make the menu on mobile work nicely, use your own imagination here.
  - *Bonus points*: Make the Image Slider, and other components work as intended, maybe you'll need some JS?
  - *Bonus points*: Use newer image formats such as WebP and AVIF, while still maintaining support for older formats.

## Ready?

Apply everything you've learend before, do your best, and Good luck! 🤓