// Title Case a Sentence
// "I'm a little tea pot"
// Basic Solution

String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var value in newTitle) {
        updatedTitle[value] = newTitle[value].toLowerCase().replaceAt(0, newTitle[value].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

// Solution
// I'm A Little Tea Pot