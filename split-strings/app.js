// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const strLength = str.length;
  const paddedStr = strLength % 2 !== 0 ? str.padEnd(strLength + 1, '_') : str;
  //convert string to array
  const strArr = paddedStr.split('');
  console.log(strArr);

  //serperate sting into pairs of 2 letters
  const pairArr = strArr
    .map((letter, idx) => (idx % 2 === 0 ? letter + strArr[idx + 1] : ''))
    .filter((pair) => pair !== '');

  return pairArr;
}

solution('abc');
