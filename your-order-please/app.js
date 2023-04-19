// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function orderString(str) {
  const orderedWords = [];
  //Seperate string into sperate words
  const words = str.split(' ');
  //Loop through array of words to get each indivdual word
  for (let i = 0; i < words.length; i++) {
    const curWord = words[i];
    //Loop through letters of each word to get number
    for (let j = 0; j < curWord.length; j++) {
      //Push to emty array based on number
      if (!isNaN(+curWord.charAt(j))) {
        orderedWords[+curWord.charAt(j) - 1] = curWord;
      }
    }
  }

  //Convert array of words back to a string
  const orderedStr = orderedWords.join(' ');

  //return new ordered sting
  return orderedStr;
}


orderString('World2 Hello1'); //-> Hello1 World2
