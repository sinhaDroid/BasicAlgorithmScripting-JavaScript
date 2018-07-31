// Where Do I Belong
// Intermediate Solution Part 2
// getIndexToIns([1, 2, 3, 4, 5], 1.5) return 1 b/c greater than 1 (index 0) and less than 2 (index 1)
// getIndexToIns([20, 3, 5], 19) return 2 b/c once array is sorted it will look like [3, 5, 20]
// getIndexToIns([20, 3, 5], 19) 19 is less than 20 (index 2) and greater than 5 (index 1)

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function (a, b) {
        return a - b;
    })
    return arr.indexOf(num);
}

console.log(getIndexToIns([1, 2, 3, 4, 5], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([20, 3, 5], 19));

// Solution
// 1
// 2
// 2