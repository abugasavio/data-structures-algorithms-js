function loop(n) {
  console.log(n);
  if (n === 0) {
    return n;
  }
  return loop(n - 1);
}

loop(20);
