// Repeat a string
// 'candy apples, -1, 4
// Advanced Solution

function repeatStringNumTimes(str, num) {
    return (num > 0) ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes('candy apple', -1));
console.log(repeatStringNumTimes('candy apple', 4));

// Solution
// candy applecandy applecandy applecandy apple