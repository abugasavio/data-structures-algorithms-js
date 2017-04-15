function multi(arr, num) {
  if (arr.length === 1) {
    return arr[0] * num;
  }
  return [arr[0] * num].concat(multi(arr.splice(1), num));
}

console.log(multi([1, 2, 3], 4));
