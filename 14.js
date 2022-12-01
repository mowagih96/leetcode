/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let match = true;

  const sortedWords = strs.sort((a, b) => a.length - b.length);
  const shortestWord = sortedWords[0];

  for (let i = 0; i < shortestWord.length; i++) {
    // Shortest word characters
    for (let j = 1; j < sortedWords.length; j++) {
      // Sorted words
      currWord = sortedWords[j];

      if (shortestWord[i] !== currWord[i]) {
        match = false;
        break;
      }
    }
    if (match) prefix += shortestWord[i];
    else break;
  }

  return prefix;
};
