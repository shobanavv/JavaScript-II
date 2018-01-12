// Complete the following functions.

const nFibonacci = (n) => {
  if (n === 0) return;
  if (n <= 2) {
    return n;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
};

const nFactorial = (n) => {
  let factn = n;
  if (n <= 1) return 1;
  factn *= nFactorial(n - 1);
  return factn;
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
};

/* Extra Credit */
// const trt = (obj) => {
//   Object.values(obj).forEach(val) => {
//     for (let i = 0; i < obj.length; i++) {
//       obj[key][i] === val ? return true : return false;
//     }
//   });
//   return true if every property on `obj` is the same
//   otherwise return false
// };

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  // checkMatchingLeaves,
};
