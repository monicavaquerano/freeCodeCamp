// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newList = [...arr];
  newList.push(bookName);
  return newList;
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newList = [...arr];
  const book_index = newList.indexOf(bookName);
    if (book_index >= 0) {
    newList.splice(book_index, 1);
    return newList;

    // Change code above this line
    }
}
console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
