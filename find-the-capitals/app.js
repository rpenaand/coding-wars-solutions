// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
  // Write your code here
  const strArr = word.split('');
  const capitals = strArr
    .map((str, idx) => (str === str.toUpperCase() ? idx : ''))
    .filter((str) => str !== '');
  return capitals;
};

capitals('CodEWaRs');
