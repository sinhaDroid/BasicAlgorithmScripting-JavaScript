// Slasher Flick
// Basic Solution
// slasher([1, 2, 3], 2); must return [ 3 ]

function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3], 2));

// Solution
// [ 3 ]