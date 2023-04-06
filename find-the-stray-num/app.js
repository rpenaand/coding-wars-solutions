// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    const sortedArr = numbers.sort((a, b) => a - b)
    return sortedArr[0] === sortedArr[1] ? sortedArr[sortedArr.length - 1] : sortedArr[0]
  }