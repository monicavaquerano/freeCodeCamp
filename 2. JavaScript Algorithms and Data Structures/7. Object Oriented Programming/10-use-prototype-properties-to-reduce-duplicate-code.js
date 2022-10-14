function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");

Dog.prototype.numLegs = 4;

let ownProps = [];
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
console.log(ownProps);
