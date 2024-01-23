function rot13(str) {
  let newStr = "";
  str = str.toUpperCase();
  let regex = /[_\W]/;
  for (let i = 0; i < str.length; i++){
    if (regex.test(str[i])){
      newStr += str[i];
    } else {
      let char = str.charCodeAt(i)
      let code = char + 13;
      // Between 65 - 90
      if (code > 90){
        code = code - 90;
      } if (code < 65) {
        code = code + 64;
      }
      newStr += String.fromCharCode(code)
    }
  }
  // console.log(newStr)
  return newStr;
}

rot13("SERR PBQR PNZC");
rot13("¡hola_amor!");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
