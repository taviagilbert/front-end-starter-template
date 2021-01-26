# Front-End Starter Template

## License

Under The MIT License

## Changelog

            - ** JAN 26th 2021 - First commit: v.1.0.0 **

## Features

List of features included:

- Modern web technologies: Bootstrap(v4), jquery, popper JS, Yarn, Gulp, SASS(SCSS), and PUG
- Page templates: index.pug
- Open Graph & Twitter Card
- Includes Development(src) and Production(dist).

## Installing

1. `git clone https://github.com/taviagilbert/front-end-starter-template.git`
2. `cd folder name && yarn install`
3. `gulp dev`

## File Structure

Directories

```
Front-End Starter Kit • Folder Structure
.
├── src/  // <--------- Development Folder.
│   │   ├── images/ ** incudes uncompressed images **
│   │   ├── js/
│   │   │   │   ├── custom/
│   │   │   │   |   ├── theme.js
│   │   │   │   ├── vendor/ ** incudes all vendor js files **
│   │   ├── scss/
│   │   │   ├── helpers/
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _variables.scss
│   │   │   ├── vendor/
│   │   │   │   ├── bootstrap4/ ** incudes all bootstrap sass(scss) files **
│   │   │   ├── _components.scss
│   │   │   ├── _helpers.scss
│   │   │   ├── _layouts.scss
│   │   │   ├── _utilities.scss
│   │   │   ├── theme.scss
│   │   ├── template/ ** incudes pug files **
├── dist/  // <--------- Production Folder.
│   │   ├── assets/
│   │   │   ├── css/ ** incudes css files **
|   |   |   |    ├── vendor/ ** incudes vendor css files **
│   │   │   ├── images/ ** incudes compressed images **
│   │   │   ├── js/
|   |   |   |    ├── vendor/ ** incudes vendor js files **
├── gulpfile
├── LICENSE
├── package.json
├── README.md
├── readme.txt
└── yarn.lock

```

## Using Gulp

### Run tasks separately
- Run: `$ gulp devAssets` to copy all dev assets
- Run: `$ gulp copyAssets` to copy all assets to vendor folder
- Run: `$ gulp buildHTML` to build pug to html
- Run: `$ gulp watchfiles` to watch files on change
- Run: `$ gulp styles` to compile scss files, and minify css files
- Run: `$ gulp scripts` to compile js files, and minify js files
- Run: `$ gulp concatscripts` to concat all js files, and minify js files
- Run: `$ gulp images` to compress images
- Run: `$ gulp serve` to run browser sync
- Run: `$ gulp favicon` to copy favicon to production folder
- Run: `$ gulp devclean` to delete folders or files
- Run: `$ gulp clean` to delete dev folders or files for production

## Licenses & Credits
- [Bootstrap](https://getbootstrap.com) | MIT License
- [jQuery](https://jquery.org) | MIT License
- [Popper.js](https://popper.js.org) | MIT License

## Contributing
1. Fork it
2. Submit a pull request