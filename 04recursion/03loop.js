function loop(n) {
  console.log(n);
  if (n === 4) {
    return n;
  }
  return loop(n - 1);
}

loop(10);

