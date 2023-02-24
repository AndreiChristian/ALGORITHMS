const factorial = (n: number): number => {
  let result: number = 1;
  while (n >= 1) {
    result = result * n;
    n--;
  }
  return n;
};

console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(10));
console.log(factorial(15));
