/**
 * @author savio
 * date 04/07/2017
 * Implement a function that flattens a nested array.
 * flatten([1,[2],[3, [[4]]]]);
 * ==> [1,2,3,4]
 */


function isArray(arr) {

  return arr instanceof Array;
}

function flatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(isArray(item) ? flatten(item) : item);
  }, []);
}

console.log(flatten([1, [2], [3, [[4]]]]));

