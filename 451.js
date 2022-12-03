/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const charFrequency = {};
  const sortedCharFrequency = [];
  let str = "";

  for (let i = 0; i < s.length; i++) {
    charFrequency[s[i]] = charFrequency[s[i]] ? charFrequency[s[i]] + 1 : 1;
  }

  for (const [prop, value] of Object.entries(charFrequency)) {
    sortedCharFrequency.push([prop, value]);
  }

  sortedCharFrequency
    .sort((a, b) => b[1] - a[1])
    .forEach((item) => (str += item[0].repeat(item[1])));

  return str;
};
