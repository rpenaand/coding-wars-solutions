// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  //Seperate each letter by converting to array
  const strArr = text.toLowerCase().split('');

  // Loop through each letter and filter out invalid letters
  const validLetter = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const filteredStrArr = strArr
    .filter((letter) => (validLetter.includes(letter) ? letter : null))
    .filter((letter) => letter);

  // Loop through each letter and convert it to alphabet position
  const numArr = filteredStrArr.map((letter) => letter.charCodeAt(0) - 96);

  // Convert back to string and return string value
  const numStr = numArr.join(' ');
  return numStr;
}

alphabetPosition(" A The sunset sets at twelve o' clock.");
