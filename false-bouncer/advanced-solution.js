// Falsy Bouncer
// Advanced Solution
// Falsy values: false, null, 0, "", undefined, and NaN

var falsyArr = [0, 1, 2, 3, null, 5, "", 7, 8, undefined, 10, NaN, 12, 13, false];

function bouncer(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer(falsyArr));

// Solution
// [ 1, 2, 3, 5, 7, 8, 10, 12, 13 ]