// Confirm the Ending
// He has to give me a new name, 'name'
// 2nd Solution

function confirmEnding(str, target) {
    if (str.substr(str.length - target.length, str.length) !== target) {
        return false;
    } else {
        return true;
    }
    return str;
}

console.log(confirmEnding('He has to give me a new name', 'name'));

// Solution
// True