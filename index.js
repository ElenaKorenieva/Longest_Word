// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms,
// you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
// findLongestWord("May the force be with you")  // should return 5.

//Pseudocode
// Create a function with string as a parameter;
// Split the sentence into words using a space as the delimiter;
// Initialize a variable to keep track of the length of the longest word;
// Iterate through the words and update the longest word length if a longer word is found;
// Call function with necessary argument inside console.log.

function findLongestWord(str) {
  const words = str.split(" ");

  let longestWordLength = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }

  return longestWordLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("May the force be with you"));
