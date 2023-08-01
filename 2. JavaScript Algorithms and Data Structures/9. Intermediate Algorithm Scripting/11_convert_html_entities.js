function convertHTML(str) {
  let conv = "";
  for (let i = 0; i < str.length; i++) {    
    switch(str[i]) {
      case "&":
        conv = conv + "&amp;";
        break;
      case "<":
        conv = conv + "&lt;";
        break;
      case ">":
        conv = conv + "&gt;";
        break;
      case '\"':
        conv = conv + "&quot;";
        break;
      case "\'":
        conv = conv + "&apos;";
        break;
      default:
        conv = conv + str[i];
    }
  } 
  return conv;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("hola & adios"));
