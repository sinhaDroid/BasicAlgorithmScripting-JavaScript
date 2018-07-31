// Caesar's Cipher
// Advanced  Solution
// 'LBH QVQ VG!'

function caesarCipher(value) {
    return value.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

console.log(caesarCipher('LBH QVQ VG!'));

// Solution
// YOU DID IT!