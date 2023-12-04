function binaryAgent(str) {
  // Divide la cadena en octetos separados por espacios
  const letters = str.split(" ");

  // Inicializa un array para almacenar los caracteres decodificados
  const chars = [];

  // Inicializa una nueva cadena para almacenar la cadena resultante
  let newStr = "";

  // Itera sobre cada octeto en el array 'letters'
  letters.forEach((letter) => {
    // Convierte cada octeto binario a su equivalente decimal y lo agrega al array 'chars'
    chars.push(parseInt(letter, 2));
  });

  // Itera sobre cada carácter decimal en el array 'chars'
  chars.forEach((char) => {
    // Convierte cada carácter decimal a su equivalente en el conjunto de caracteres y lo agrega a 'newStr'
    newStr += String.fromCharCode(char);
  });

  // Devuelve la cadena resultante
  return newStr;
}
