function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const divisors = max - min + 1;
  // Largest possible value for SCM
  let largestCommon = 1;
  for (let i = min; i <= max; i++) {
    largestCommon *= i;
  }
  // console.log(largestCommon);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= largestCommon; multiple += max){
      // console.log(multiple);
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;
      for (let i = min; i <= max; i++){
              // Count divisors
        if (multiple % i === 0){
          divisorCount += 1;
        }
      }
      if (divisorCount === divisors){
        return multiple;
      }
    }
}

console.log(smallestCommons([1,5]));
