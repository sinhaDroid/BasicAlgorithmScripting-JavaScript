// Caesar's Cipher
// Intermediate  Solution
// 'LBH QVQ VG!'

function caesarCipher(value) {
    var charArray = [];
    var regEx = /[A-Z]/;
    value = value.split("");
    for (var x in value) {
        if (regEx.test(value[x])) {
            charArray.push((value[x].charCodeAt() - 65 + 13) % 26 + 65);
        } else {
            charArray.push(value[x].charCodeAt());
        }
    }
    value = String.fromCharCode.apply(String, charArray);
    return value;
}

console.log(caesarCipher('LBH QVQ VG!'));

// Solution
// YOU DID IT!