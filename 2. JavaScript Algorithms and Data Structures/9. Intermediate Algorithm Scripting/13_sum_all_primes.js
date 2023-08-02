function sumPrimes(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let d = 0;
    for (let j = 1; j <= num; j++) {
      if (i % j === 0) {
        d++;
      }
    }
    if (d === 2) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10)); // 17
