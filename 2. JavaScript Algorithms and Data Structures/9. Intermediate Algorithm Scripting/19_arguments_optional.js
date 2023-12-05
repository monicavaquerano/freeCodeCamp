function addTogether() {
  // Desestructura los argumentos para obtener 'first' y 'second'
  const [first, second] = arguments;

  // Verifica si 'first' es un número
  if (typeof first === "number") {
    // Si 'second' también es un número, devuelve la suma
    if (typeof second === "number") {
      return first + second;
    } 
    // Si hay solo un argumento y es un número, devuelve una función que espera el segundo número
    if (arguments.length === 1) {
      return (second) => addTogether(first, second);
    }
  }
}

console.log(addTogether("2",3)); // undefined
console.log(addTogether(2,3));  // 5
console.log(addTogether(2));  // [Function]
console.log(addTogether(5, undefined)); // undefined
