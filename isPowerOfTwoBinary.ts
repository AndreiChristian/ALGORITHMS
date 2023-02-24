// bitwise magic 🏎️
// we will use & (bitwise and, more info available on MDN).
// What it does is
// "The bitwise AND (&) operator returns a 1 in each bit position for
// which the corresponding bits of both operands are 1s."

function isPowerOfTwoBinary(n: number): boolean {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}



console.log(isPowerOfTwoBinary(1))
console.log(isPowerOfTwoBinary(2))
console.log(isPowerOfTwoBinary(3))
console.log(isPowerOfTwoBinary(4))
console.log(isPowerOfTwoBinary(10))
console.log(isPowerOfTwoBinary(512))
console.log(isPowerOfTwoBinary(1028))
console.log(isPowerOfTwoBinary(6))