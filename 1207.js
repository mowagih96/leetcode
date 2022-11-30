/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occurences = {};

  for (let i = 0; i < arr.length; i++) {
    occurences[arr[i]] = occurences[arr[i]] ? occurences[arr[i]] + 1 : 1;
  }

  const occurencesValues = Object.values(occurences);

  return occurencesValues.length === new Set(occurencesValues).size;
};
