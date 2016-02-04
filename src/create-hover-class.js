var cuid = require('cuid')

module.exports = CreateHoverClass

function CreateHoverClass (hoverJSON, className) {
  className = className || cuid()

  var hoverCSS = '.' + className + ':hover {'

  Object.keys(hoverJSON).map(function (stylePropertyName) {
    // We add !important for consumers that are using inlined styles
    hoverCSS += stylePropertyName + ':' + hoverJSON[stylePropertyName] + ' !important;'
  })

  hoverCSS += '}'

  var HoverObject = {}
  HoverObject.name = className
  HoverObject.css = hoverCSS

  return HoverObject
}
