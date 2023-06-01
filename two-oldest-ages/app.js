// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  const sortedArr = ages.sort((a, b) => a - b);
  console.log(sortedArr);
  return [sortedArr[sortedArr.length - 2], sortedArr[sortedArr.length - 1]];
}

console.log(twoOldestAges([1, 2, 10, 8]));