/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const index = nums.findIndex((num) => num === target);

  // exist
  if (index !== -1) return index;
  // doesn't exist
  else {
    for (let i = 0; i < nums.length; i++) {
      // smaller than any number in the list
      if (i === 0 && nums[i] > target) return 0;
      // could fit between the numbers
      else if (nums[i] < target && nums[i + 1] > target) return i + 1;
      // bigger than any number in the list
      else if (i === nums.length - 1) return nums.length;
    }
  }
};
