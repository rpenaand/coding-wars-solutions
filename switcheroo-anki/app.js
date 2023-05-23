// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//PREP

function switcheroo(x) {
  return x.replace(/[ab]/g, (el) => (el === 'a' ? 'b' : 'a'));
}

function switcheroo(x) {
  // Covert string into array
  const strArr = x.split('');

  //loop through array
  //Check val of array
  //if equal to a switch it to b
  //if equal to b swtich it to a
  const switchedArr = strArr.map((val) =>
    val === 'a' ? 'b' : val === 'b' ? 'a' : 'c'
  );

  //Convert array back to string
  //return new string
  return switchedArr.join('');
}

switcheroo2('abc'); // -> bac
switcheroo2('cbaa'); // -> cabb
