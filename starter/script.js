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

    if (retire > 0) {
        console.log(firstName + ' retires in ' + retire + ' years.');

    } else {
        console.log(firstName + ' already retired.');

    }

}

yearsUntilRetirement(1996, 'Manuel');
yearsUntilRetirement(1945, 'Mike');
yearsUntilRetirement(1960, 'Mary');




/******************************
 * Function Statements and Expressions
 */

//Function declaration
//   var function whatDoYouDo(job, firstName) {}

//function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';

        case 'driver':
            return firstName + ' drives a taxi in Dublin';

        case 'designer':
            return firstName + ' designs beautiful websites'

        default:
            return firstName + ' does something else'
    }
}

console.log(whatDoYouDo('teacher', 'Manuel'));
console.log(whatDoYouDo('driver', 'Mary'));
console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('janitor', 'Jane'));


/******************************
 * Arrays
 */

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1996, 1969, 1948);

console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'john is NOT a designer' : "John IS a designer";
console.log(isDesigner);








/******************************
 * Coding Challenge 3
 */

function tipCalculator(bill) {
    var percent;
    if (bill < 50) {
        percent = .2;
    } else if (bill > 50 && bill < 200) {
        percent = .15;
    } else {
        percent = .1;
    }
    return percent * bill;
}

var bill = [124, 48, 268];
var tips = [tipCalculator(bill[0]),
    tipCalculator(bill[1]),
    tipCalculator(bill[2])
];
var finalBill = [bill[0] + tips[0],
    bill[1] + tips[1],
    bill[2] + tips[2]
];

console.log(tips, finalBill);



function tipCalcSwitch(bill) {
    var percent;
    switch (bill) {
        case bill < 50:
            percent = .2;
            break;
        case bill > 50 && bill < 200:
            percent = .15;
            break;
        default:
            percent = .1;
            break;
    }

    return percent * bill;
}

var bill = [124, 48, 268];
var tips = [tipCalcSwitch(bill[0]),
    tipCalcSwitch(bill[1]),
    tipCalcSwitch(bill[2])
];
var finalBill = [bill[0] + tips[0],
    bill[1] + tips[1],
    bill[2] + tips[2]
];

console.log(tips, finalBill);



/************************
 * Objects and properties
 */

var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: '1990',
    family: ['jane', 'bob', 'sally'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.birthYear = '1990';
jane['lastName'] = 'smith';
console.log(jane);

/*************************
 * Objects and methods
 */

var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: '1996',
    family: ['jane', 'bob', 'sally'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2019 - this.birthYear;
    }
};

// console.log(john.calcAge());
// var age = john.calcAge();
john.age = john.calcAge();
console.log(john);





/********************************
 * CODING CHALLENGE 4
 */

var mark = {
    firstName: "Mark",
    lastName: "Brandanaquitz",
    mass: 90,
    height: 1.82,
    bodyMassIndex: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
var john = {
    firstName: "John",
    lastName: "Smith",
    mass: 97.5,
    height: 1.78,
    bodyMassIndex: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};
// mark.bodyMassIndex();
// john.bodyMassIndex();

if (john.bodyMassIndex() > mark.bodyMassIndex()) {
    console.log(john.firstName + " " + john.lastName + " has the highest BMI of: " + john.bmi);
} else if (john.bodyMassIndex() < mark.bodyMassIndex()) {
    console.log(mark.firstName + " " + mark.lastName + " has the highest BMI of: " + mark.bmi);
} else {
    console.log("It's a tie");
}



/********************
 * Loops and Iterations
 */

 //FOR LOOP

for (var i = 0; i < 10; i++) {
    console.log(i);

}
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 0 < 10 true, log i to console, i++
//...
// i = 9, 0 < 10 true, log i to console, i++
// i = 10, 0 < 10 false, exit the loop!

// var john = ['John', 'Smith', 1990, 'teacher', false];
// console.log(john[0]);

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);

// }


// //  WHILE LOOP

// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
// }

// Continue and Break statements

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

/********
 * mini challenge to reverse array order
 */

//  for (var i = john.length - 1; i >= 0; i--) {
//      console.log(john[i]);
     
//  }








/***********************************
 * CODING CHALLENGE 5
 */

 var johnBill = {
     bill: [124, 48, 268, 180, 42],
     tip: [],
     final: [],
     calcTip: function () {
        this.tip = [];
        this.final = [];

         for (var i = 0; i < this.bill.length; i++) {
             var percentage;
             var myBill = this.bill[i]; 

             if (myBill < 50) {
                percentage = .2;
             } else if (myBill >= 50 && myBill < 200) {
                percentage = .15;
             } else {
                percentage = .1;
             }

             this.tip[i] = myBill * percentage;
             this.final[i] = myBill + myBill * percentage;
         }
     }
 }

 johnBill.calcTip();
 console.log(johnBill);