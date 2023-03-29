// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(str) {
  //convert str to array of words
  const words = str.split(' ');
  let highestWord = '';
  let highestScore = 0;

  //loop and assign score to each word
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      score += word.charCodeAt(j) - 96;
    }
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}
