// Repeat a string
// 'candy apples, -1, 4
// Intermediate Solution

function repeatStringNumTimes(str, num) {
    if (num < 0)
        return "";
    if (num === 1)
        return str;
    else
        return str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes('candy apple', -1));
console.log(repeatStringNumTimes('candy apple', 4));

// Solution
// candy applecandy applecandy applecandy apple