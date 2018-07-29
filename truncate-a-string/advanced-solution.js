// Truncate a String
// 'Orange', 1, 3, 7
// Advanced Solution

function truncateString(str, num) {
    if (str.length > num)
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    else
        return str;
}

console.log(truncateString('Orange', 1));
console.log(truncateString('Orange', 3));
console.log(truncateString('Orange', 7));

// Solution
// O...
// Ora..
// Orange