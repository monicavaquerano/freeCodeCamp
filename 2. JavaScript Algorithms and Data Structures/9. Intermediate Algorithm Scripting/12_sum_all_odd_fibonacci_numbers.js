function sumFibs(num) {
  let sum = 0;
  let previous = 0;
  let current = 1;
  
  while (current <= num) {
    if (current % 2 != 0) {
      sum += current;
    }
    current += previous
    previous = current - previous  
  }
  return sum;
}

console.log(sumFibs(10)); //10
