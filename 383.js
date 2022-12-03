const createLettersFrequency = (arr) => {
  const lettersFreq = {};

  for (let i = 0; i < arr.length; i++) {
    // Create letter entry if it doesn't exist
    if (!lettersFreq.hasOwnProperty(arr[i])) lettersFreq[arr[i]] = 1;
    else lettersFreq[arr[i]] += 1;
  }

  return lettersFreq;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let result = false;
  const ransomNoteLettersFreq = createLettersFrequency(ransomNote);
  const magazineLettersFreq = createLettersFrequency(magazine);

  for (const prop in ransomNoteLettersFreq) {
    // Check if the letter exists in magazine with the less than or equal frequency
    if (
      magazineLettersFreq.hasOwnProperty(prop) &&
      ransomNoteLettersFreq[prop] <= magazineLettersFreq[prop]
    ) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
};
