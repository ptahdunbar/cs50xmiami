/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var year = 2014;
var birthYear = 1870;

var age = year - birthYear;
var ageOther = year - (birthYear - 1);

console.log("They are either" + age + "or" + ageOther ".");
