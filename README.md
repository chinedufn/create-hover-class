create-hover-class [![npm version](https://badge.fury.io/js/create-hover-class.svg)](http://badge.fury.io/js/create-hover-class) [![Build Status](https://travis-ci.org/chinedufn/create-hover-class.svg?branch=master)](https://travis-ci.org/chinedufn/create-hover-class)
===============

> Create css hover class

TODO: Why use this?

## To Install

```
$ npm install --save create-hover-class
```

## Usage

```js
var createHC = require('create-hover-class')

var hoverObject = createHC({
  color: 'rgba(0, 0, 0, 1)'
  'font-weight': '700'
})

console.log(hoverObject)
// {name: 'cih3lymsf0000wly8uizhbo6d', css: '.cih3lymsf0000wly8uizhbo6d:hover {...}'}
```

Using `insert-css`

```js
var createHC = require('create-hover-class')
var insertCSS = require('insert-css')
var h = require('virtual-dom/h')

var hoverObj = createHC({/* keyframe object */})
insertCSS(HoverObj.css)

h('label', {
  className: hoverObj.name
}, 'I get big and red when you hover over me!')
```

## API

#### `createHC(hoverObject[, identifier])` -> `object`

##### hoverObject

*Required*  
Type: `object`

Styles to apply on hover

##### identifier

Type: `string`

A class-name. `create-hover-class` will generate a [cuid](https://github.com/ericelliott/cuid) if no class-name is specified

## See Also

- [create-keyframe](https://github.com/chinedufn/create-keyframe)
- [insert-css](https://github.com/substack/insert-css)
- [insert-styles](https://github.com/bendrucker/insert-styles)

## License

MIT
