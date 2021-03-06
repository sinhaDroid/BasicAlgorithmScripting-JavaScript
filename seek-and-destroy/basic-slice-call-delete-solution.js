// Seek and Destroy
// Basic Solution

var initArr = [11, 23, 83, 41, 95, 36, 77, 81, 90];
var newArr = [11, 33, 88, 41, 77, 8, 4, 10];

function destroyer(arr, arr1) {
    var args = arr.slice.call(arr1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] == args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

console.log(destroyer(initArr, newArr));

// Solution
// [ 23, 83, 95, 36, 81, 90 ]