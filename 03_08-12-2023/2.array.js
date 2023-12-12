/*
//  print 9th and 10th index of array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.push(10, 11)
console.log("arr", arr)

*/

// =========================================================================

/*
//  print every element of array by map.
let arr = [1, 2, 3, 4, 5,]

let b = arr.map(test)
console.log("b", b)

function test(x) {
    return x * 10
}

*/

// ============================================================================

//  change a value of 6th index with 100

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.splice(6, 0, 100);
console.log("arr", arr)
*/


// ==========================================================================
/*
// print a array till element value not grater then 100

let arr = [1, 2, 100, 3, 4, 5, 100, 6, 7, 8, 9]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 100) {
        break;
    }
    console.log("arr", arr[i]);
}

*/

// ============================================================================

//  add 1 in every element of an array
/*
let array = [1, 2, 3, 4, 5]

array.forEach((value, index, array) => {
    array[index] = value + 1;
});

console.log("array", array);

*/

// ============================================================================

// add 0 in start of array
/*
let arr = [1, 2, 3, 4, 5]

arr.unshift(0)
console.log(arr);

*/

// ============================================================================

//  add  99 in end of array

/*
let arr = [1, 2, 3, 4, 15]

arr.push(99)
console.log(arr);

*/

// ============================================================================

//    remove 1 element from start of  array

/*
let arr = [1, 2, 3, 4, 15]

arr.shift()
console.log(arr);

*/

//  ============================================================================

//  remove 1 element from end of array
/*
let arr = [1, 2, 3, 4, 15]

arr.pop()
console.log(arr);

*/

// ============================================================================

// do sum of all value of an array with use of map, reduce and for-loop
/*
let arr = [1, 2, 3, 4, 5];

let b = arr.map(num => num);

let sum = b.reduce((acc, num) => acc + num, 0);

console.log(sum);
*/

//  using map
/*
let arr = [1, 2, 3, 4, 5];

let b = arr.map(num => num);

let sum = b.reduce((acc, num) => acc + num, 0);

console.log(sum);

*/


//  used foor loop
/*
let arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

*/

// ============================================================================

//  sort a array in acending decending

/*
let arr = [1, 2, 12, 5, 9, 26, 14, 7, 8, 10]

let b = arr.sort((a, b) => a - b);

console.log("Answer:", b);

*/


// =============================================================================

// reverce an array with use of method
/*
let arr = [1, 2, 3, 9, 8, 7, 4, 5, 6]

let b = arr.reverse();

console.log(b)

*/

// ==============================================================================

// reverce an array with use of for-loop
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
let b = arr.length;

for (let i = 0; i < b / 2; i++) {
    let c = arr[i];
    arr[i] = arr[b - 1 - i];
    arr[b - 1 - i] = c;

}
console.log(arr);

*/








// ================================================ Task 2  ====================================================


//  give all value which can devided by 2 - not use filter
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let b = []

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
        b.push(arr[i]);
    }
}

console.log(b)

*/

// ==================================================

// give all value above 3 by use of filter
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let b = arr.filter(value => value > 3);

console.log(b)

*/

// ==================================================

// give index of 56
/*
let arr = [1, 2, 3, 4, 56, 7, 8, 9, 10]

let b = arr.indexOf(56);

console.log(b)

*/

// ===================================================

//  give true/false result when check given value is exists in array or not
/*
let arr = [1, 2, 3, 4, 56, 7, 8, 9, 10]

let b = arr.includes(56);

console.log(b)

*/

// ================================================  task 3  =============================================

// ['i','am', 'jayom'] ==> want ['jayom','am','i']
/*
by use of map and loop
let arr = ['i', 'am', 'jayom'];

let b = arr.map((value, index, array) => array[array.length - 1 - index]);

console.log(b);

*/

// ===========================================

// want "i am urvish" without use join method

/*
let arr = ['i', 'am', 'jayom'];
let b = arr[0] + ' ' + arr[1] + ' ' + arr[2];

console.log(b)

*/

// ================================================  task 4  =============================================

// ['i','am', 'jayom'] ==> want ['i','ma','moyaj'] by use of loop

/*
let arr = ['i', 'am', 'jayom'];

let reversearr = [];
for (let i = 0; i < arr.length; i++) {
    let reversedString = '';
    for (let j = arr[i].length - 1; j >= 0; j--) {
        reversedString += arr[i][j];
    }
    reversearr.push(reversedString);
}

console.log(reversearr);

*/

// =================================================================================================






















