// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// First Solution
function findShort(s) {
  const words = s.split(' ');
  let shortestWord = words[0];
  words.forEach((word) => {
    if (word.length < shortestWord.length) shortestWord = word;
  });
  return shortestWord.length;
}

//Refactored Code
function findShort2(s) {
  return Math.min(...s.split(' ').map((val) => val.length));
}

console.log(findShort2('Hello there how are you'));
