// Mutations
// Basic Solution
// ["hello", "Hello"] true, ["hello", "hey"] false, ["Alien", "line"] true

function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (let index = 0; index < test.length; index++) {
        if (target.indexOf(test[index]) == -1)
            return false;
    }
    return true;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));

// Solution
// true
// false
// true