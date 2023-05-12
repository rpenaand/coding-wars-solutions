// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
  //loop thorugh array and get sum

  //return sum divided by length of array to get average
  return Math.floor(marks.reduce((acc, cur) => acc + cur, 0) / marks.length);
}

getAverage([1, 1, 2, 4]); //-> 2
getAverage([1, 1, 1, 3]); // -> 1.5
