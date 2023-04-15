// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    //Check if array is empty return 0 if empty
    if (array.length < 0) return 0;
  
    // loop through array and add values
    const sum =  array.reduce((acc, curVal) => (acc + curVal), 0) 
    //Divide sum by arr length to get average
    //return average val
    return sum / array.length
  }

const arr = [1, 2, 3];
findAverage(arr); //-> 2
