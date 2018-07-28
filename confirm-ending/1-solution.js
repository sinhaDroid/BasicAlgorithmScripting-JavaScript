// Confirm the Ending
// Elephant, 't'
// 1st Solution

function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
}

console.log(confirmEnding('Elephant', 't'));

// Solution
// True