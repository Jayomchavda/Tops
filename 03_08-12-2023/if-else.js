// make a function which take a number and ,
// - if number is even then it will ptint "number is even",
// - if odd the it will print "number is odd" and
// - if i pass 0 it will print "number is ZERO"

/*
let num = 0;

if (num === 0) {
    console.log("Number is ZERO..!");
} else if (num % 2 === 0) {
    console.log("Number is even..!");
} else {
    console.log("Number is odd..!");
}

*/

// =================================================================================================

//  make a function which, if i give a array with odd and even number it will remove all odd number and return a array with evnet number.
//  node - return array must be in accending order

/*
let inputarr = [1, 2, 77, 78, 9, 8, 12];
let ansarr = filterNumber(inputarr);

function filterNumber(arr) {
    let evenNumbers = arr.filter(number => number % 2 === 0);


    let sortedEvenNumbers = evenNumbers.sort((a, b) => a - b);
    return sortedEvenNumbers;
}


console.log("Input arr:", inputarr);
console.log("Ans arr:", ansarr);

*/

// =============================================================================================

// Made a function which a count how many time user given carector is repeting in string.
/*
function countCharacter(inputStr, charToCount) {
    let count = 0;

    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === charToCount) {
            count++;
        }
    }

    if (count === 0) {
        return "Character is not available in the string";
    } else {
        return count;
    }
}

let inputStr = "hello world";
let charToCount1 = 'h';
let charToCount2 = 'l';
let charToCount3 = 't';

console.log(countCharacter(inputStr, charToCount1));
console.log(countCharacter(inputStr, charToCount2));
console.log(countCharacter(inputStr, charToCount3));

*/

// =================================================================================================

//  make a function who reverce a string (by use of for-loop)
/*
function reverseStr(inputStr) {
    let reversedString = '';

    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedString += inputStr[i];
    }

    return reversedString;
}

let inputStr = "Hello World...!";
let reversed = reverseStr(inputStr);
console.log(reversed);

*/

//====================================================================================================

//make a function who reverce a string by word

/*
function reverseword(inputString) {
    let wordsarr = inputString.split(' ');
    let reversedString = '';

    for (let i = wordsarr.length - 1; i >= 0; i--) {
        reversedString += wordsarr[i] + ' ';
    }

    return reversedString.trim();
}

let inputString = "Hello World Test User";
let reversed = reverseword(inputString);
console.log(reversed);

*/

// =============================================================================================

//
/*
function reversecharacters(inputString) {
    let wordsarr = inputString.split(' ');
    let reversedString = '';

    for (let i = wordsarr.length - 1; i >= 0; i--) {
        let word = wordsarr[i];
        let reversedWord = '';

        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        reversedString += reversedWord + ' ';
    }

    return reversedString.trim();
}

let inputString = "Hello World Test User";
let reversed = reversecharacters(inputString);

console.log(reversed);

*/

// =================================================================================================

//  Make a function who return a sum of all array(simple array) element

/*
function sumarr(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 4, 6];

console.log(sumarr(arr1));
console.log(sumarr(arr2));

*/

// =================================================================================================

// 5. make a function who is return a subject name which have highest and lowest number
// Note : return a object like { lowentMarsk : "Englis", higestMarks :"Hindi" }

/*
function subjectmarks(marksheet) {
    let result = {
        lowmarksSubject: "",
        highmarksSubject: "",
    };

    let lowmarks = Infinity;
    let highmarks = -Infinity;

    for (let i = 0; i < marksheet.length; i++) {
        if (marksheet[i].marks < lowmarks) {
            lowmarks = marksheet[i].marks;
            result.lowmarksSubject = marksheet[i].subject;
        }

        if (marksheet[i].marks > highmarks) {
            highmarks = marksheet[i].marks;
            result.highmarksSubject = marksheet[i].subject;
        }
    }

    return result;
}

let marksheet = [
    { subject: "Gujarati", marks: 60 },
    { subject: "Maths", marks: 40 },
    { subject: "Science", marks: 50 },
    { subject: "Hindi", marks: 70 },
    { subject: "English", marks: 30 },
];

console.log(subjectmarks(marksheet));

*/

// =================================================================================================

// 

