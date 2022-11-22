function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase())
  {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  else if (before[0] != before[0].toUpperCase())
  {
    after = after.replace(after[0], after[0].toLowerCase());
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

console.log(myReplace("I think we should look up there", "up", "Down"));
