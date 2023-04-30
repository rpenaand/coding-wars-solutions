// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  let idx;
  //loop through the string
  for (let i = 0; i < string.length; i++) {
    //Get Index of uppercase letter
    if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      idx = i;
    }
  }
  //Split Word based on index
  const words = string.split(string.charAt(idx));
  return words.join(' ');
}

solution('camelCasing'); // -> camel Casing
solution('helloWorld'); // -> hello World
