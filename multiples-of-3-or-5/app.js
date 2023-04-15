// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solution(number) {
  //Check if num is greater than 0
  if (number < 0) return 0;

  //Create empty array to store all values that are multiples of 3 & 5
  let sum = 0;
  //loop n times based on passed number
  for (let i = 3; i < number; i++) {
    //check if num is multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

solution(10); // -> 3, 5, 6, 9 -> 23



