const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  // Getters
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };
  // Setters
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(first, last) {
    firstName = first;
    lastName = last;
  };
};

let bob = new Person("Bob", "Ross");

console.log(bob.getFullName());

bob.setFirstName('Haskell');

console.log(bob.getFullName());
