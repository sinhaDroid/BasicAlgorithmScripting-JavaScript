// Title Case a Sentence
// "I'm a little tea pot"
// Advanced Solution

function titleCase(str) {
    str = str.split(' ');
    for (let index = 0; index < str.length; index++) {
        str[index] = str[index].toLowerCase().split('');
        str[index][0] = str[index][0].toUpperCase();
        str[index] = str[index].join('');
    }
    return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

// Solution
// I'm A Little Tea Pot