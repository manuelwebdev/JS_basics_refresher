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

// var now = 2019;
// var yearManuel = 1996;
// var fullAge = 23;

// // Multiple operators
// var isFullAge = now - yearManuel >= fullAge; // true
// console.log(isFullAge);

// Grouping
// var ageManuel = now - yearManuel;
// var ageMark = 35;
// var average = (ageManuel + ageMark) / 2;
// console.log(average);

//Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

/***************
 * More operators
 */

// x = x * 2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);

// x = x +1;
// x += 1;
// x--;
// console.log(x);










/********************
 * CODING CHALLENGE 1
 */

//  var massMark, massJohn, heightMark, heightJohn;
//  massMark = 100;
//  massJohn = 150;
//  heightMark = 6;
//  heightJohn = 7;
//  console.log(massMark, massJohn, heightMark, heightJohn);

//  markBMI = massMark / heightMark ** 2;
//  console.log('Mark\'s bmi = ' + markBMI);
//  johnBMI = massJohn / heightJohn ** 2;
//  console.log('John\'s bmi = ' + johnBMI);

//  var isJohnHigher = johnBMI > markBMI;
//  console.log('Is john\'s bmi higher than mark\'s? ' + isJohnHigher);



/*********************
 * if / else Statements
 */

var fName = 'Manuel';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(fName + ' is married');
} else {
    console.log(fName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(fName + ' is married');
} else {
    console.log(fName + ' will hopefully marry soon :)');
}


var massMark, massJohn, heightMark, heightJohn;
massMark = 200;
massJohn = 150;
heightMark = 6;
heightJohn = 7;

markBMI = massMark / heightMark ** 2;
johnBMI = massJohn / heightJohn ** 2;

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s. ');
} else {
    console.log('John\'s BMI is higher than Mark\'s. ');
}



/*********************
 * Boolean logic
 */

var fName = 'Manuel';
var age = 20;

if (age < 13) {
    console.log(fName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20 // age >= 13 AND age < 20
    console.log(fName + ' is a teenager.');
} else if (age >= 20 && age < 30) { // between 13 and 20 // age >= 13 AND age < 20
    console.log(fName + ' is a young man.');
} else {
    console.log(fName + ' is a man.');
}


/*********************
 * The Ternary Operator and Switch statements
 */

var fName = 'Manuel';
var age = 16;

// Ternary operator
age >= 21 ? console.log(fName + ' drinks beer.') : console.log(fName + ' drinks water.');

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

/* if (age >= 18) {
     var drink = 'beer';
 } else {
     var drink = 'juice';
 }
 */

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher': // teacher and instructor both out put the same message from line 233.
    case 'instructor':
        console.log(fName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(fName + ' drives an Uber');
        break;
    case 'designer':
        console.log(fName + ' designs beautiful websites');
        break;

    default:
        console.log(fName + ' does something else')
}

age = 15;
switch (true) {
    case age < 13:
        console.log(fName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(fName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(fName + ' is a young man.');
        break;

    default:
        console.log(fName + ' is a man.');
        break;
}


/********************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}


// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}




/***************************
 * CODING CHALLENGE 2
 */


var jA, jB, jC, mA, mB, mC, maA, maB, maC;
jA = 89; //89
jB = 120; //120
jC = 503; //103

mA = 89; //116
mB = 120; //94
mC = 503; //123

maA = 97; //97
maB = 134; //134
maC = 105 //105

jAve = (jA + jB + jC) / 3;
console.log(jAve);

mAve = (mA + mB + mC) / 3;
console.log(mAve);

maAve = (maA + maB + maC) / 3;
console.log(maAve);

if (jAve > mAve && jAve > maAve) {
    console.log('John WINS! (' + jAve + '). Mike: ' + mAve + ' and Mary: ' + maAve);
} else if (jAve === mAve === maAve) {
    console.log('Mike, John, and Mary tied.');
} else if (mAve > jAve && mAve > maAve) {
    console.log('Mike WINS! (' + mAve + '). John: ' + jAve + ' and Mary: ' + maAve);
} else if (maAve > mAve && maAve > jAve) {
    console.log('Mary WINS! (' + maAve + '). John: ' + jAve + ' and Mike: ' + mAve);
} else if (jAve === mAve && (jAve, mAve) > maAve) {
    console.log('John and Mike tie')
}




/*****************************
 * Functions
 */

 function calculateAge(birthYear) {
     return 2019 - birthYear;
 }

 var ageManuel = calculateAge(1996);
 var ageMike = calculateAge(1935);
 var ageMary = calculateAge(1969);

 console.log(ageManuel, ageMike, ageMary);

 function yearsUntilRetirement(year, firstName) {

    var age = calculateAge(year);
    var retire = 65 - age;
    console.log(firstName + 'retires in ' + retire + ' years.');
 }

 yearsUntilRetirement(1996, 'Manuel');
























