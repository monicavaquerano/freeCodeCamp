function convertToRoman(num) {
  let unidad = num % 10;
  let decena = (num % 100 - num % 10) / 10;
  let centena = (num % 1000 - num % 100) / 100;
  let millar = (num % 10000 - num % 1000) / 1000;
  let u = "";
  let d = ""; 
  let c = "";
  let m = "";
  if (num > 9999) {
    return "Value too high"
  } else {
  switch(true) {
      case (unidad < 4):
        for (let i = 0; i < unidad; i++) {u += "I"};
        break;
      case (unidad == 4):
        u = "IV"
        break;
      case (unidad == 5):
        u = "V"
        break;
      case (unidad < 9):
        u = "V"
        for (let i = 6; i <= unidad; i++) {u += "I"};
        break;
      case(unidad == 9):
        u = "IX"
        break;
    }
    switch(true) {
      case (decena < 4):
        for (let i = 0; i < decena; i++) {d += "X"};
        break;
      case (decena == 4):
        d = "XL"
        break;
      case (decena == 5):
        d = "L"
        break;
      case (decena < 9):
        d = "L"
        for (let i = 6; i <= decena; i++) {d += "X"};
        break;
      case(decena == 9):
        d = "XC"
        break; 
    }
    switch(true) {
      case (centena < 4):
        for (let i = 0; i < centena; i++) {c += "C"};
        break;
      case (centena == 4):
        c = "CD"
        break;
      case (centena == 5):
        c = "D"
        break;
      case (centena < 9):
        c = "D"
        for (let i = 6; i <= centena; i++) {c += "C"};
        break;
      case(centena == 9):
        c = "CM"
        break; 
    }
    switch(true) {
      case (millar < 4):
        for (let i = 0; i < millar; i++) {m += "M"};
        break;
      case (millar == 4):
        m = "I̲V̲"
        break;
      case (millar == 5):
        m = "V̲"
        break;
      case (millar < 9):
        m = "V̲"
        for (let i = 6; i <= millar; i++) {m += "I̲"};
        break;
      case(millar == 9):
        m = "I̲X̲"
        break;
    }
    let roman = `${m}${c}${d}${u}`
    return roman;
  }
}
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(8));
console.log(convertToRoman(9));
console.log(convertToRoman(10));
console.log(convertToRoman(11));
console.log(convertToRoman(36));
console.log(convertToRoman(55));
console.log(convertToRoman(188));
console.log(convertToRoman(1988));
console.log(convertToRoman(3999));
console.log(convertToRoman(9999));
console.log(convertToRoman(10000));
