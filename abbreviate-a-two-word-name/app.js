// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  //Capitlize String
  name = name.toUpperCase();

  //Seperate Names
  const strArr = name.split(' ');

  //Get first Letter of each name
  const firstName = strArr[0].charAt(0);
  const lastName = strArr[1].charAt(0);
  //Format string to correct format EX:R.P
  return `${firstName}.${lastName}`;
}

console.log(abbrevName('Raul Pena'));
