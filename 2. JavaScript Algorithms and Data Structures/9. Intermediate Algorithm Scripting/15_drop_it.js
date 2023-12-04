function dropElements(arr, func) {
  // Mientras el array no esté vacío y el primer elemento no cumpla con la condición
  while (arr.length > 0 && !func(arr[0])) {
    // Elimina el primer elemento del array
    arr.shift();
  }
  // Devuelve el array resultante
  return arr;
}

// Ejemplo 1: dropElements([1, 2, 3], function(n) {return n < 3; })
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
// El array inicial es [1, 2, 3]
// Iteración 1: El primer elemento es 1, cumple con la condición (1 < 3), no se elimina ningún elemento.
// Iteración 2: El primer elemento es 2, cumple con la condición (2 < 3), no se elimina ningún elemento.
// Iteración 3: El primer elemento es 3, NO cumple con la condición (3 < 3), se elimina el elemento 3.
// El array resultante es [3]

// Ejemplo 2: dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
// El array inicial es [1, 2, 3, 9, 2]
// Iteración 1: El primer elemento es 1, NO cumple con la condición (1 > 2), se elimina el elemento 1.
// El array resultante es [2, 3, 9, 2]
// Iteración 2: El primer elemento es 2, NO cumple con la condición (2 > 2), se elimina el elemento 2.
// El array resultante es [3, 9, 2]
// Iteración 3: El primer elemento es 3, cumple con la condición (3 > 2), no se elimina ningún elemento.
// El array resultante es [3, 9, 2]
// La función devuelve [3, 9, 2]

