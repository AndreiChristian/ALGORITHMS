const factorialWithRegression = (n: number) => {
  if (n === 1) {
    return 1;
  }
  return n * factorialWithRegression(n - 1);
};
