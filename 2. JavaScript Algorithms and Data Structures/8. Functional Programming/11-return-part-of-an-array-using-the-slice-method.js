function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
const arr = anim.slice(beginSlice, endSlice)
return arr;
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
