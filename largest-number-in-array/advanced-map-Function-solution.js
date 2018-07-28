// Return Largest Numbers in Arrays
// array will have 583, 999, 113, 55
// Advanced Solution

var numArr = [
    [583, 999, 113, 55],
    [456, 345, 546, 222],
    [124, 45, 46, 565],
    [23, 76, 88, 33]
];

function largestNumArr(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestNumArr(numArr));

// Solution
// [ 999, 546, 565, 88 ]