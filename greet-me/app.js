// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
  //change name to lowercase
  const lowerCaseName = name.toLowerCase();
  //change first letter of name to uppercase
  const formattedName = lowerCaseName.replace(
    lowerCaseName.charAt(0),
    lowerCaseName.charAt(0).toUpperCase()
  );

  //return Hello Name!
  return `Hello ${formattedName}!`;
};

console.log(greet('RAul'));
