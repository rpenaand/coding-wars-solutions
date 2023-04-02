// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  //Seperate Words
  const strArr = str.split(' ');
  //Reverse Individual Words
  const reversedStr = strArr.map((str) => str.split('').reverse().join(''));
  return reversedStr.join(' ');
}

console.log(reverseWords('double spaces'));
