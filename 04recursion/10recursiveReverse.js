// Visualization here: https://goo.gl/jrUXHk

function recursiveReverse(arr) {
  if (arr.length === 1) {
    return arr;
  }
  return recursiveReverse(arr.splice(1)).concat(arr[0]);
}

console.log(recursiveReverse([2, 4, 3]));
