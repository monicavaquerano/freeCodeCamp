function spinalCase(str) {
  let pattern = /\W|_+/g;

  let result = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return result.replace(pattern,"-").toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));
