var test = require('tape')

var createHC = require('../')

var hoverJSON = {
  color: 'red',
  'font-weight': '700'
}

var hoverCSS = '' +
  '.foo:hover {' +
  'color:red !important;' +
  'font-weight:700 !important;' +
  '}'

test('create hover css', function (t) {
  var hoverClassName = 'foo'
  var newHoverObj = createHC(hoverJSON, hoverClassName)
  // Auth generated classname
  var hoverCUID = createHC(hoverJSON)

  t.equal(newHoverObj.name, hoverClassName)
  t.equal(newHoverObj.css, hoverCSS)
  t.ok(hoverCUID.name, 'No name was provided, so we created a random default')
  t.end()
})
