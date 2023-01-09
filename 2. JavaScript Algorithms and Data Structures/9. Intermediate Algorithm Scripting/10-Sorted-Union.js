// FALTA TERMINAR ESTE EJERCICIO

function uniteUnique(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++)
  {
    for (let j = 0; j < arr.length; j++)
    {
      if (arr[i] != arr[j])
      {
        unique.push(arr[j]);
      }
    }
    return unique;
  }
  
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
