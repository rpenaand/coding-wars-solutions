// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
  const filtered = "aeiou01234567890_ ^&$#'";
  return str
    .toLowerCase()
    .split('')
    .filter((val) => filtered.includes(val) === false).length;
}
