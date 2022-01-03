// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }

  if (!obj) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    var result = [];

    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }

    result = result.join(',');

    return '[' + result + ']';
  }

  if (typeof obj === 'object') {
    var result = [];

    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        var newKey = stringifyJSON(key);
        var value = stringifyJSON(obj[key]);
        var insert = newKey + ':' + value;
        result.push(insert);
      }
    }

    result = result.join(',');
    return '{' + result + '}';
  }
};
