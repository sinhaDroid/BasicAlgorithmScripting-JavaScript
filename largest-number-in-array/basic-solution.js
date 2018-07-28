// Return Largest Numbers in Arrays
// array will have 583, 999, 113, 55
// Basic Solution

var numArr = [
    [583, 999, 113, 55],
    [456, 345, 546, 222],
    [124, 45, 46, 565],
    [23, 76, 88, 33]
];

function largestNumArr(arr) {
    var results = [];
    for (let index = 0; index < arr.length; index++) {
        var largestNumber = arr[index][0];
        for (let i = 1; i < arr[index].length; i++) {
            if (arr[index][i] > largestNumber) {
                largestNumber = arr[index][i];
            }
        }
        results[index] = largestNumber;
    }
    return results;
}

console.log(largestNumArr(numArr));

// Solution
// [ 999, 546, 565, 88 ]