const isPowerOfTwo = (n: number) => {
  if (n < 1) {
    return false;
  }
  while (n >= 2) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(13));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(512));


