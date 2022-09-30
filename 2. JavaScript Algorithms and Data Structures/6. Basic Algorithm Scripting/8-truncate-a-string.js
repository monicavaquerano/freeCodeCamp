function truncateString(str, num) {
//Mi solución yo solita (no supe user slice jajaja pero la supuse)
/*   let newStr = "";
 if (str.length <= num){
    return str;
  } else {
  for (let i = 0; i < num; i++){
    newStr += str[i];
  } 
    return newStr + "...";}
 */
if (str.length > num) {
  return str.slice(0,num) + "...";
} else {
  return str;
}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
