function recursiveMultiplier(arr, num) {
  if (arr.length === 1) {
    return arr[0] * num;
  }
  return [arr[0] * num].concat(recursiveMultiplier(arr.splice(1), num));
}

console.log(recursiveMultiplier([1, 2, 3], 4));

