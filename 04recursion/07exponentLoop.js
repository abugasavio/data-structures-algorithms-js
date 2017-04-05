function exponent(base, expo) {
  let exp = 1;
  let e = expo;
  while (e > 0) {
    exp *= base;
    e -= 1;
  }
  return exp;
}

console.log(exponent(2, 4));
