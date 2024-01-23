function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\-\s])?(\d{3})([\-\s])?(\d{4})$/;  
  let phoneCheck = regex.test(str)
  // console.log(phoneCheck)
  return phoneCheck;
}

telephoneCheck("555-555-5555"); // true
telephoneCheck("1 555-555-5555"); // true
telephoneCheck("1 (555) 555-5555"); // true
telephoneCheck("5555555555") // true
telephoneCheck("(555)555-5555") // true
telephoneCheck("555-5555"); // false
telephoneCheck("5555555") // false
telephoneCheck("123**&!!asdf#") // false
telephoneCheck("(555)5(55?)-5555") // false
telephoneCheck("11 555-555-5555") // false
telephoneCheck("1 555)555-5555") // false
telephoneCheck("(6054756961)") // false
telephoneCheck("27576227382") // false
telephoneCheck("(275)76227382") //false
