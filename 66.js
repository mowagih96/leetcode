/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const numbers = BigInt(digits.join("")) + 1n;

  return Array.from(numbers.toString());
};
