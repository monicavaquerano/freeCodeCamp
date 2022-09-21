function quickCheck(arr, elem) {
  // Only change code below this line
return arr.indexOf(elem) >= 0 ? true:false;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//Version que yo pensé a la primera
/* 
function quickCheck(arr, elem) {
  // Only change code below this line
if (arr.indexOf(elem) >= 0) {
  return true;
} else {
  return false;
}
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); */
