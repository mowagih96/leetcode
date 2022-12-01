/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = "aeiou";
  const str = s.toLowerCase();
  const strLength = str.length;
  const a = str.substring(0, strLength / 2);
  const b = str.substring(strLength / 2, strLength);
  let aCount = 0,
    bCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(a[i])) aCount++;
    if (vowels.includes(b[i])) bCount++;
  }

  return aCount === bCount;
};
