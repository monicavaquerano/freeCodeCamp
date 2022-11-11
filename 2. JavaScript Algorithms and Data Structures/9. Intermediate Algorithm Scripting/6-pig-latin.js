function translatePigLatin(str) {
 if (str.match(/^[aeiou]/)) return str + "way";
 
 let consonantes = str.match(/^[^aeiou]+/)[0];
 let newStr = str.substring(consonantes.length) + consonantes + "ay";
 
 return newStr;
}

console.log(translatePigLatin("consonant"));
