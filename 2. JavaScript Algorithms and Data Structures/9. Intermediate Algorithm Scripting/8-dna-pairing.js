function pairElement(str) {
  let letter = str.split("");
  let newStr = [];
  for (let i = 0; i < letter.length; i++)
  {  
    switch(letter[i])
    {
      case "G":
        newStr.push(["G", "C"]);
        break;
      case "C":
        newStr.push(["C", "G"]);
        break;
      case "A":
        newStr.push(["A", "T"]);
        break;
      case "T":
        newStr.push(["T", "A"]);
        break;
    }
  } 
  return newStr;
}

console.log(pairElement("GCG")); // [["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA"));
