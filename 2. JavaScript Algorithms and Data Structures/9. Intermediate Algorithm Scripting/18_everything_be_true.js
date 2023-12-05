function truthCheck(collection, pre) {
  let coLength = collection.length;
  let truthy = 0;

  for (let i = 0; i < coLength; i++) {
    if (collection[i][pre]){
      truthy += 1;
    }
  }
    if (truthy === coLength) {
      return true;
    } else {
      return false;
    }
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")); // false

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name")); // true
