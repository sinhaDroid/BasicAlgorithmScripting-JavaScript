function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");