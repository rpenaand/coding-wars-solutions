// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  let newStr = '';
  //loop through the string
  for (let i = 0; i < string.length; i++) {
    //Check if letter is uppercase if so add space
    if (string[i] === string[i].toUpperCase()) {
      newStr += ' ';
    }
    newStr += string[i];
  }

  return newStr;
}

// solution('camelCasing');
// solution('identifier');
solution('camelCasing Test');
solution('get ProblemEye');
