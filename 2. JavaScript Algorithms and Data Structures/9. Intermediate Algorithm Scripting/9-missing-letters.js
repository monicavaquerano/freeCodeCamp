function fearNotLetter(str) {
    let dif = 0;
    for (let i = 0; i < str.length; i++)
    {
      dif = str.charCodeAt(i) - str.charCodeAt(i - 1);
      if (dif > 1) 
      {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }
  
  console.log(fearNotLetter("abce")); //'d'
  console.log(fearNotLetter("abcde")); // undefined
  console.log(fearNotLetter("abcdefghjklmno")); //'i'
  console.log(fearNotLetter("stvwx")); //'u'
