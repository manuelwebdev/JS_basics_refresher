/*****************
* Variables and data types
*/
// var fName = 'manuel';
// console.log(fName);

// var lName = 'espinoza';
// var age = 23;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job);


/*****************
* Variable mutations and type coercion
*/

var fName = 'manuel';
var age = 23;

console.log(fName + ' ' + age);

var job, isMarried;
job =  'teacher';
isMarried = false;

console.log(fName + ' is a ' + age + ' years old ' + job + '. Is he married?' +isMarried);

/* Variable mutation */

age = 'twenty three';
job = 'driver';

alert(fName + ' is a ' + age + ' years old ' + job + '. Is he married? ' +isMarried);

var lName = prompt('What is your last name?');
console.log(fName + ' ' + lName);