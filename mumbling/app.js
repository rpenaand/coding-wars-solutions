// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  const arr = s.split('');
  const newArr = [];
  arr.forEach((element, idx) => {
    newArr.push(addToStr(element, idx + 1));
  });
  return newArr.join('-');
}

function addToStr(str, num) {
  let newStr = '';
  for (let i = 0; i < num; i++) {
    newStr += str.toLowerCase();
  }
  return newStr.replace(newStr.charAt(0), newStr.charAt(0).toUpperCase());
}

function accum2(s) {
  return s
    .split('')
    .map((val, idx) => val.toUpperCase().padEnd(idx + 1, val.toLowerCase()))
    .join('');
}

function accum3(s) {
  return s
    .split('')
    .map((val, idx) => val.toUpperCase() + val.toLowerCase().repeat(idx + 1))
    .join('');
}

console.log(accum3('abcd'));
