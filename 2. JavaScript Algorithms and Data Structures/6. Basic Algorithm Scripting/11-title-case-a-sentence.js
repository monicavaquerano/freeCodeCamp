function titleCase(str) {
  let words = str.split(" ");
  let capLetter = [];
for (let st in words){
  capLetter[st] = words[st][0].toUpperCase() + words[st].slice(1).toLowerCase();
}
  
  return capLetter.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
