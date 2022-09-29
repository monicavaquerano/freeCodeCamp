function confirmEnding(str, target) {
  return (str.slice(str.length - target.length) == target)
  
  return str;
}

console.log(confirmEnding("Bastian", "n"));
