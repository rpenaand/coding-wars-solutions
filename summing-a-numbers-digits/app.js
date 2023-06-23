// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  const strNum = '' + number;
  let sum = 0;
  const numArr = strNum.split('').map((val) => Number(val));
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}
