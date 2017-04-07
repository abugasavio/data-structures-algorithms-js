/**
 * @author savioabuga <savioabuga@gmail.co,>
 * date 04/03/2017
 * exponent using recursion
 */
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
