/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumsDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  // One character
  if (s.length === 1) return romanNumsDict[s];

  // Two characters
  if (s.length === 2 && romanNumsDict.hasOwnProperty(s))
    return romanNumsDict[s];

  // Combinations
  const romanNums = s.split("");
  let sum = 0;

  for (let i = 0; i < romanNums.length; i++) {
    let comb = "";

    if (i !== romanNums.length - 1) {
      comb = romanNums[i] + romanNums[i + 1];

      if (romanNumsDict.hasOwnProperty(comb)) {
        sum += romanNumsDict[comb];
        i++;
      } else sum += romanNumsDict[romanNums[i]];
    } else sum += romanNumsDict[romanNums[i]];
  }

  return sum;
};

/* 
Better answer by someone else:

var romanToInt = function(s) {
    const romanNumsDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000 
        };
        
    let result = 0;
    
    for(let i = 0; i < s.length; i++){
        const cur = romanNumsDict[s[i]];
        const next = romanNumsDict[s[i+1]];

        if (cur < next){
            result += next - cur; // IV -> 5 - 1 = 4
            i++
        } else {
            result += cur;
        }
    }

    return result; 
};
*/
