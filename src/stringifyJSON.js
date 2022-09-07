// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // create result string
  var stringify = '';

  // if obj is a function, undefined, or null
  if (typeof obj === 'function' || typeof obj === 'undefined' || obj === null) {
    // add null
    stringify += 'null';
  // if its not an object
  } else if (typeof obj !== 'object') {
    // add it to result
    stringify += obj;
    // if its a string,
    if (typeof obj === 'string') {
      // wrap result in double quotes
      stringify = '"' + stringify + '"';
    }
  // if its an array
  } else if (Array.isArray(obj)) {
    // add opening bracket to result
    stringify += '[';
    // iterate over the array
    obj.forEach(function (element) {
      // add the stringified element + comma
      stringify += stringifyJSON(element) + ',';
    });
    // if the length of the string is greater than 1
    if (stringify.length > 1) {
      // remove the last character from the string
      stringify = stringify.slice(0, -1);
    }
    // add a closing bracket
    stringify += ']';
  // otherwise
  } else {
    // add an opening brace to result
    stringify += '{';
    // iterate over the result
    for (var key in obj) {
      // if the value isn't a function or undefined
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        // add key (quoted), colon, the stringified value, and a comma
        stringify += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    // if the length of the string is greater than 1
    if (stringify.length > 1) {
      // remove the last character
      stringify = stringify.slice(0, -1);
    }
    // add closing brace
    stringify += '}';
  }

  // return result
  return stringify;
};
