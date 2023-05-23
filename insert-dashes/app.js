// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//PREP

function insertDash(num) {
  // Convert num to string
  const strNum = '' + num;
  // Convert num str to array
  const strArr = strNum.split('');
  //loop through array and check if val is odd
  const newArr = strArr.map((val, idx) =>
    //Check if following val is odd if so add -
    val % 2 !== 0 && idx > 0 && strArr[idx - 1] % 2 !== 0 ? `-${val}` : val
  );

  //covert arr to string
  //return newstr
  return newArr.join('');
}

//
insertDash(12354); // -> 123-54
insertDash(33521); // -> 3-3-521
