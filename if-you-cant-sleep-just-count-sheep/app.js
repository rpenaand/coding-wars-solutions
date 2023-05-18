// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  //declare empty str
  let str = '';

  //loop n times and add to str
  for (let i = 1; i <= num; i++) {
    //return str
    str += `${i} sheep...`;
  }
  return str;
};
