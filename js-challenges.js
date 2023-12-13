export function sum(a, b) {
    return a + b;
  }
 export function subtract(a, b) {
    return a - b;
  }
  export function countLetters(a , b){
    const regex = new RegExp(b, 'g');
    const matches = a.match(regex);
    return matches ? matches.length : 0;
  }
  export function isPalindrome(str){
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  export function isAnagram(str1,str2){
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  