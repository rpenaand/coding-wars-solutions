// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

function removeConsecutiveDuplicates(string) {
    //Convert string into array
    const strArr = string.split(' ');
    //Loop through array and compare values
    for (let i = 0; i < strArr.length - 1; i++) {
      if (strArr[i] === strArr[i + 1]) {
        strArr[i] = null;
      }
    }
    //Join Modified array
    const newStr = strArr.filter((val) => val).join(' ');
    console.log(newStr);
  
    //return new string
    return newStr;
  }

removeConsecutiveDuplicates(
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
);
