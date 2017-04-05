function exponent(base, expo) {
  if (expo === 1) {
    return base;
  }
  return base * exponent(base, expo - 1);
}

console.log(exponent(2, 12));
