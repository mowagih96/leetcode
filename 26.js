/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let currNum = nums[i],
      nextNum = nums[i + 1];

    if (currNum === nextNum) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
};
