/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];

    if (currNum === val) nums.splice(i--, 1);
  }
};
