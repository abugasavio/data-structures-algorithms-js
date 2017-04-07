/**
 * @author savio
 * date 04/06/2017
 * Implement a function that flattens a nested array.
 * flatten([1,[2],[3, [[4]]]]);
 * ==> [1,2,3,4]
 */
const flattened = [];

function flatten(arr) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] instanceof Array) {
      console.log(arr[i]);
      flatten(arr[i]);
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}


console.log(flatten([1, [2], [3, [[4]]]]));
