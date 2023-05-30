// String.prototype.formatWith = function () {}
// that takes in a list of arguments and formats the string based off these arguments and indices.

// For example:

// 'Hello {0}'.formatWith('Codewars') ===  'Hello Codewars'
// '{0} + {0} = {1}'.formatWith('1','2') ===  '1 + 1 = 2'
// 'Testing {1}'.formatWith('kata') === 'Testing {1}' // there is no arguments at position 1

String.prototype.formatWith = function (...args) {
  // code me
  let str = this.toString();
  args.forEach((val, idx) => {
    while (str.includes(`{${idx}}`)) str = str.replace(`{${idx}}`, val);
  });
  return str;
};
