// Flip the string
function flipString(str) {
  const emptyStr = 0;
  const unflippableStrLength = 1;
  const firstSym = 0;
  const withoutFirstSym = 1;
  if (str.length === emptyStr || str.length === unflippableStrLength) {
    return str;
  }
  return flipString(str.slice(withoutFirstSym)) + str[firstSym];
}

// Convert string to a number
function flipNum(num) {
  const numAsString = String(num);
  const fliped = +flipString(numAsString);

  return fliped;
}

// Check if num is palindrome
function isPalindrome(num) {
  return flipNum(num) === num ? true : false;
}

// Making a palindrome
function toPalindrome(num, step = 0) {
  try {
    const reverseNumber = flipNum(num);
    if (isPalindrome(num)) {
      return {
        palindrome: num,
        steps: step,
      };
    }
    return toPalindrome(num + reverseNumber, ++step);
  } catch ({ message }) {
    throw new Error(message);
  }
}

const firstNum = 89;
const secondNum = 312;
const trirdNum = 48;
console.log(toPalindrome(firstNum));
console.log(toPalindrome(secondNum));
console.log(toPalindrome(trirdNum));
