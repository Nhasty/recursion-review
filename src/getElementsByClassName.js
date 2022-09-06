// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var $element = arguments[1] || document.body;

  if ($element.classList && Array.from($element.classList).includes(className)) {
    result.push($element);
  }

  var $children = Array.from($element.childNodes);

  if ($children.length) {
    ($children).forEach(function (child) {
      result = result.concat(getElementsByClassName(className, child));
    });
  }

  return result;
};
