function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice();
  for (let i = 0; i < arr1.length; i++){
    arr.splice(n, 0 , arr1[i]);
    n++;
  }
  return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

let a = [0,1,2,3,4,5];
let a2 = [0,1,2,3,4,5];

let b = a.splice(2);  //Copia exactamente desde el primer parámetro
console.log(b);

let c = a2.slice(2); //Corta desde el primer parámetro
console.log(c);
