// Mutations
// Intermediate Solution
// ["hello", "Hello"] true, ["hello", "hey"] false, ["Alien", "line"] true

function mutation(arr) {
    return arr[1].toLowerCase().split('').every(function (letter) {
        return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));

// Solution
// true
// false
// true