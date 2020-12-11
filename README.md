# Photograph mockup-to-website project

In this project, I use ***HTML***, ***SASS*** and ***BEM***. I use a little bit of ***Javascript*** to make the image slider work. Since I worked with html, I need to really focus on these things: 

  - Use the right elements for the right job.
  - Structure the HTML nicely.
  - HTML is accessible.
  - Valid HTML.
  - Test it, so that there is no error. Avoid any warning if possible.

  ***Styles**:
  - I work with Mobile-First by default, and Responsive.
  - I use some custom property
  - Use sass 

First things first, if you want to use this design. Let's get started. You will need the following…

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

- Design screenshot:
![photograph](https://iili.io/KoEJbn.png)

- online at [figma.com/Laaqiq-1-Portfolio-detail-Responsive](https://www.figma.com/file/VgF87mULloYb7HZ1EMCRzU/Laaqiq-1-Portfolio-detail-Responsive?node-id=0%3A1) (Recommended)
- by importing the `.fig` file in [the `source_materials` folder](./source_materials/) into your figma app.

### Source files

Have a look in the `source_materials` folder. There you'll find any fonts you need, images that are required by the design work.

Since `WOFF/WOFF2` is more flexible and more suportive, use it in fonts rules.

### Webroot

As with most setups, it's a good idea to isolate all the web-files in the `webroot` folder.
Export all the images, fonts, HTML, JS, and CSS you use to this webroot folder (in the right subfolder of course!). Publish the webroot folder since we don't want to publish everything that is not needed.

3. Create a `webroot/index.html` file.

### Sass

I'm using the `scss` folder for all our Sass files.

To get started with it, do the following steps

4. Create a `scss/index.scss` file, that will act as our manifest Sass file.
5. Build your CSS file once by running the `npm run scss` script.

All your Sass files will be output to the `webroot/css` folder.

### Linking up our styles

6. Link up the new `webroot/css/index.css` stylesheet in your `index.html`

## Development

You'll want to run the `scss:watch` task when you're developing this project.