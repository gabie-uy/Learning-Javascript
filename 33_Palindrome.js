// 33 Palindrome

function isPalindrome(word) {
  let reverse = "";
  
  let lowerCaseWord = word.toLowerCase();
  
  for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
    reverse += lowerCaseWord[i];
  }
  
  return reverse == lowerCaseWord;
}

console.log(isPalindrome("Racecar"));