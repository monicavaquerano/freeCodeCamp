function sentensify(str) {
  // Only change code below this line
let chain = str.split(/\W/);
let newStr = chain.join(" ");
return newStr;

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
