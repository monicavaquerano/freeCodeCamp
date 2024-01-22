function palindrome(str) {
  let newStr = "";
  let regex = /[_\W]/g
  str = str.replace(regex, "").toLowerCase();
  for (let i = str.length - 1; i >= 0; i--)  {
    newStr += str[i];
  }
  if (newStr == str){
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("not a palindrome"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("1 eye for of 1 eye."));
