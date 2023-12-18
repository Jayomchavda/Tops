// 1. make a function which take a number and ,
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

// 2. make a function which, if i give a array with odd and even number it will remove all odd number and return a array with evnet number.
//  node - return array must be in accending order

// if i give [ 1,2,4,78,2,6] need [2,2,4,6,78]
// - [2,4,78,2,6] => ans is wrong
// - [1,2,2,78,6] => ans is wrong
// - [2,2,4,6,78] => correct ans

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

//4. Made a function which a count how many time user given carector is repeting in string.
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

// 5. make a function who reverce a string (by use of for-loop)
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

// 6.make a function who reverce a string by word

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

//7. make a function who reverce a string by wordand also need to reverce each word
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

// 8. Make a function who return a sum of all array(simple array) element

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

// 9. Find some Data from below given array of object
/*
let marksheet = [
    {
        subject: "Gujarati", marks: 60
    },
    {
        subject: "Maths",
        marks: 40
    },
    {
        subject: "Science",
        marks: 50
    },
    {
        subject: "Hindi",
        marks: 70
    },
    {
        subject: "English",
        marks: 30
    },
]

function calculatemark(marksheet) {
    let totalMarks = 0;

    for (let i = 0; i < marksheet.length; i++) {
        totalMarks += marksheet[i].marks;
    }

    return totalMarks;
}

const totalMarks = calculatemark(marksheet);
console.log("Total Marks:", totalMarks);

*/


// ================================================
// Make a function to find total sum of all subject.
/*
let marksheet = [
    { subject: "Gujarati", marks: 60 },
    { subject: "Maths", marks: 40 },
    { subject: "Science", marks: 50 },
    { subject: "Hindi", marks: 70 },
    { subject: "English", marks: 30 }
];

function calculateTotalMarks(marksheet) {
    let totalMarks = 0;

    for (let i = 0; i < marksheet.length; i++) {
        totalMarks += marksheet[i].marks;
    }

    return totalMarks;
}

let totalMarks = calculateTotalMarks(marksheet);

console.log("Total Marks in all subjects:", totalMarks);

*/

// ================================================


// 2. Make a function to find percentage.

/*
let marksheet = [
    {
        subject: "Gujarati", marks: 60
    },
    {
        subject: "Maths",
        marks: 40
    },
    {
        subject: "Science",
        marks: 50
    },
    {
        subject: "Hindi",
        marks: 70
    },
    {
        subject: "English",
        marks: 30
    },
]

function calculatemark(marksheet) {
    let totalMarks = 0;

    for (let i = 0; i < marksheet.length; i++) {
        totalMarks += marksheet[i].marks;
    }

    return totalMarks;
}

const totalMarks = calculatemark(marksheet);
console.log("Total Marks:", totalMarks);


function calculatePer(marksheet) {
    const totalmark = 100;

    const totalMarksObtained = marksheet.reduce((total, subject) => total + subject.marks, 0);

    const totalMarks = marksheet.length * totalmark;

    const percentage = (totalMarksObtained / totalMarks) * 100;

    return percentage;
}

const percentage = calculatePer(marksheet);
console.log(`The percentage is: ${percentage}%`);

*/

// ======================================================================

//3. Make a function to find User is pass or not (if Percentage is less then 36 he/she is fails other wise pass)

/*
let marksheet = [
    {
        subject: "Gujarati", marks: 60
    },
    {
        subject: "Maths",
        marks: 40
    },
    {
        subject: "Science",
        marks: 50
    },
    {
        subject: "Hindi",
        marks: 70
    },
    {
        subject: "English",
        marks: 30
    },
]

function pass(marksheet) {
    let totalMarks = 0;
    let totalSubjects = marksheet.length;

    for (let i = 0; i < totalSubjects; i++) {
        totalMarks += marksheet[i].marks;
    }

    let percentage = (totalMarks / (totalSubjects * 100)) * 100;

    if (percentage >= 36) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let result = pass(marksheet);
console.log(`Result: ${result}`);

*/


// =================================================================

// 4. Make a function which will print a centence for each subject

/*
let marksheet = [
    {
        subject: "Gujarati", marks: 60
    },
    {
        subject: "Maths",
        marks: 40
    },
    {
        subject: "Science",
        marks: 50
    },
    {
        subject: "Hindi",
        marks: 70
    },
    {
        subject: "English",
        marks: 30
    },
]

function printsub(marksheet) {
    marksheet.forEach(subject => {
        console.log(`In ${subject.subject}, the student scored ${subject.marks} marks.`);
    });
}

printsub(marksheet);

*/

// =================================================================

// 5. make a function who is return a subject name which have highest and lowest number
// Note : return a object like { lowentMarsk : "Englis", higestMarks :"Hindi" }

/*
let marksheet = [
    {
        subject: "Gujarati", marks: 60
    },
    {
        subject: "Maths",
        marks: 40
    },
    {
        subject: "Science",
        marks: 50
    },
    {
        subject: "Hindi",
        marks: 70
    },
    {
        subject: "English",
        marks: 30
    },
]

function lowestmarks(marksheet) {
    if (marksheet.length === 0) {
        return { lowestMarks: null, highestMarks: null };
    }

    let lowestMarks = marksheet[0];
    let highestMarks = marksheet[0];

    marksheet.forEach(subject => {
        if (subject.marks < lowestMarks.marks) {
            lowestMarks = subject;
        }

        if (subject.marks > highestMarks.marks) {
            highestMarks = subject;
        }
    });

    return {
        lowestMarks: lowestMarks.subject,
        highestMarks: highestMarks.subject
    };
}

const result = lowestmarks(marksheet);
console.log(result);

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

