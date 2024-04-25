# Natours Website

Natours is a responsive website using Sass and CSS best practices for learning purposes. Designed by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman).

# Built With
[![Built With](https://skillicons.dev/icons?i=html,css,sass,npm,netlify,vscode)](https://skillicons.dev)

# Getting Started

### Prerequisites

- Install npm
  ```
  npm install npm@latest -g
  ```
  
### Installation
1. Clone the repo
2. Install all NPM Packages
   ```
   npm install
   ```
3. Uncomment line #11 in ```index.html``` for icon fonts for development purposes
4. Run application for development using live server
   ```
   npm run start
   ```
5. Open browser at <http://localhost:8080>

### Other npm scripts
1. To compile sass to css:
   ```npm run compile:sass```
2. To concatenate the compiled css file and the icon-font css file:
  ```npm run concat:css```
3. To parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/):
   ```npm run prefix:css```
4. To compress css file for production:
   ```npm run compress:css```
5. Run all scripts above at once [RECOMMENDED]:
   ```npm run build:css```

# License

© Copyright by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman). Use for learning or your portfolio. Don't use to teach. Don't claim as your own.

Project is from the course [_Advannced CSS and Sass: Flexbox, Grid, Animations and More_](https://www.udemy.com/course/advanced-css-and-sass/) by Jonas Schmedtmann
