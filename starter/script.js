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

// var fName = 'manuel';
// var age = 23;

// console.log(fName + ' ' + age);

// var job, isMarried;
// job =  'teacher';
// isMarried = false;

// console.log(fName + ' is a ' + age + ' years old ' + job + '. Is he married?' +isMarried);

// /* Variable mutation */

// age = 'twenty three';
// job = 'driver';

// alert(fName + ' is a ' + age + ' years old ' + job + '. Is he married? ' +isMarried);

// var lName = prompt('What is your last name?');
// console.log(fName + ' ' + lName);


/***************
 * Basic operators
 */

//  var year, yearManuel, yearMark;
//  now = 2019;
//  ageManuel = 23;
//  ageMark = 30;

// //  Math operators
//  yearManuel = now - 23;
//  yearMark = now - 33;


//  console.log(yearManuel);

//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

// //Logical operators
// var manuelOlder = ageManuel > ageMark;
// var manuelOlder = ageManuel < ageMark;
// console.log(manuelOlder);

// //typeof operator
// console.log(typeof manuelOlder);
// console.log(typeof ageMark);
// console.log(typeof 'Manuel is younger than Mark');
// var x;
// console.log(typeof x);



/*****************
 * Operator precedence
 */

var now = 2019;
var yearManuel = 1996;
var fullAge = 23;

// Multiple operators
var isFullAge = now - yearManuel >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageManuel = now - yearManuel;
var ageMark = 35;
var average = (ageManuel + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

/***************
 * More operators
 */

// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

// x = x +1;
// x += 1;
x--;
console.log(x);