function steamrollArray(arr) {
  // Se inicializa un array vacío para almacenar los elementos aplanados
  let flat = [];
  
  // Se itera sobre cada elemento del array dado
  for (let i = 0; i < arr.length; i++) {
    // Si el elemento es un array, se llama recursivamente a la función steamrollArray
    // para aplanar ese array y se agregan los elementos a 'flat'
    if (Array.isArray(arr[i])) {
      flat.push(...steamrollArray(arr[i]));
    } else {
      // Si el elemento no es un array, simplemente se agrega a 'flat'
      flat.push(arr[i]);
    }
  }
  
  // Se devuelve el array resultante después de aplanar todos los elementos
  return flat;
}

// Ejemplo: steamrollArray([1, [2], [3, [[4]]]])
console.log(steamrollArray([1, [2], [3, [[4]]]]));
// El array inicial es [1, [2], [3, [[4]]]]
// Se itera sobre cada elemento:
// Iteración 1: El elemento es 1, se agrega a 'flat'.
// Iteración 2: El elemento es [2], se llama recursivamente a steamrollArray([2]).
//   En la llamada recursiva, el elemento 2 se agrega a 'flat'.
// Iteración 3: El elemento es [3, [[4]]], se llama recursivamente a steamrollArray([3, [[4]]]).
//   En la llamada recursiva, el elemento 3 se agrega a 'flat'.
//   Luego, se llama recursivamente a steamrollArray([[4]]).
//     En esta segunda llamada recursiva, el elemento 4 se agrega a 'flat'.
// Finalmente, el array resultante es [1, 2, 3, 4]
