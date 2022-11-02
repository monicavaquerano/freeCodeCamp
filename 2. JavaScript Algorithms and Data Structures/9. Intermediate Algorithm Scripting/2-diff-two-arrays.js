function diffArray(arr1, arr2) {
  return [...dif(arr1, arr2), ...dif(arr2,arr1)];
  
  function dif(a, b)
  {
    return a.filter(num => b.indexOf(num) === -1);
  }
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
