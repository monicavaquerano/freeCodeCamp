function orbitalPeriod(arr) {
  // Constantes necesarias para el cálculo
  const GM = 398600.4418; // Gravitational constant times Earth's mass
  const earthRadius = 6367.4447; // Earth's radius in kilometers
  const twoPi = 2 * Math.PI; // 2 * π

  // Array para almacenar los nuevos objetos con el período orbital calculado
  const newArr = [];

  // Función interna para calcular el período orbital de un objeto
  const getOrbPeriod = function(obj) {
    const aOrbs = Math.pow(earthRadius + obj.avgAlt, 3); // Semi-major axis cubed
    const sq = Math.sqrt(aOrbs / GM); // Raíz cuadrada de (a^3 / μ)
    const orbPeriod = Math.round(twoPi * sq); // Cálculo final del período orbital
    // Crea un nuevo objeto con el nombre y el período orbital calculados
    return { name: obj.name, orbitalPeriod: orbPeriod };
  }

  // Itera sobre cada elemento en el array de entrada 'arr'
  for (let elem in arr) {
    // Calcula el período orbital para cada objeto y agrega el nuevo objeto al array 'newArr'
    newArr.push(getOrbPeriod(arr[elem]));
  }

  // Devuelve el array con los nuevos objetos que contienen los nombres y los períodos orbitales calculados
  return newArr;
}

// Ejemplo de uso
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// Resultado: [{ name: "sputnik", orbitalPeriod: 86400 }]
