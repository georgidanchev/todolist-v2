# webpack framework


Small summary of the setup
<br/><br/>

## Features

### Production Mode (best reliability)
* HTML Minification
* JS Minification
* CSS Prefixing
* Babel Transpile
* Babel Polyfill 
* Assets Cache Busting
* Scripts Cache Busting
* Auto File Cleaning
* No Source Map

### Development Mode (best performance)
* Webpack Live Server with auto open
* Auto File Cleaning - no duplicates in src
* Eval Source Map for JS Debugging
* No Babel Transpile
* No Cache Busting
* No Minification 
* No Prefixing

### Extras
* Seprate Vendor and Site Logic 
* Tweaked Airbnb ESlint
* Normalize-scss
* SASS Loader
<br/><br/>

# How to setup

## Commands 
* npm install - used to install all packages
* npm run dev - used to run development mode
* npm run build - used to run production mode

## Workflow

You work under dev, once work is done and you are ready to push to your server or your git repo with a hook then use the build command which will build a production ready software with just one command.

## ESLINT

Run *npm -i -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react* to install eslint, the impor plugin and the airbnb presets for JS, JSX and React. 

## NPM packages used
* [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
* [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill)
* [@babel/core](https://www.npmjs.com/package/@babel/core)
* [webpack](https://www.npmjs.com/package/webpack)
* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
* [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
* [webpack-merge](https://www.npmjs.com/package/webpack-merge)
* [babel-loader](https://www.npmjs.com/package/babel-loader)
* [autoprefixer](https://www.npmjs.com/package/autoprefixer)
* [file-loader](https://www.npmjs.com/package/file-loader)
* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
* [html-loader](https://www.npmjs.com/package/html-loader)
* [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)
* [style-loader](https://www.npmjs.com/package/style-loader)
* [optimize-css-assets-webpack-plugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
* [postcss-loader](https://www.npmjs.com/package/postcss-loader)
* [node-sass](https://www.npmjs.com/package/node-sass)
* [sass-loader](https://www.npmjs.com/package/sass-loader)
* [css-loader](https://www.npmjs.com/package/css-loader)
* [normalize-scss](https://www.npmjs.com/package/normalize-scss)


