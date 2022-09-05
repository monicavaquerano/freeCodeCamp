function rangeOfNumbers(startNum, endNum) {
/*  if (startNum - endNum === 0) {
    return [startNum];
  } else {
    const range = rangeOfNumbers(startNum, endNum - 1);
    range.push(endNum);
    return range;
  } */

  return (startNum === endNum) ? [startNum]
  :rangeOfNumbers(startNum, endNum - 1).concat(endNum);
};

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
