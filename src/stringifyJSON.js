// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // generate empty string
  // debugger
  var stringify = '';
  // edge cases: function, undefined, null
  if (typeof obj === 'function' || typeof obj === 'undefined' || obj === null) {
    // add null
    stringify += 'null';
  // if primitive add to string
  } else if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      stringify += '"' + obj + '"';
    } else {
      stringify += obj;
    }
  // if array add brackets
  } else if (Array.isArray(obj)) {
    stringify += '[';
    obj.forEach(function(item) {
      stringify += stringifyJSON(item) + ',';
    });
    if (stringify.length > 1) {
      stringify = stringify.slice(0, -1) + ']';
    } else {
      stringify += ']';
    }
  // if object add curly brace
  } else {
    stringify += '{';
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        stringify += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (stringify.length > 1) {
      stringify = stringify.slice(0, -1) + '}';
    } else {
      stringify += '}';
    }
  }
  return stringify;
};
