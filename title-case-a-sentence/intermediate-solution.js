// Title Case a Sentence
// "I'm a little tea pot"
// Intermediate Solution

function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var updatedTitle = convertToArray.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return updatedTitle.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

// Solution
// I'm A Little Tea Pot
