function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
let srcKeys = Object.keys(source);
for (let i = 0; i < collection.length; i++)
{
  let bandera = true;
  for (let j = 0; j < srcKeys.length; j++)
  {
    if (!(collection[i][srcKeys[j]] === source[srcKeys[j]]))
    {
      bandera = false;
    }
  }
  if (bandera)
  {
    arr.push(collection[i]);
  }
}
  
/* var srcKeys = Object.keys(source);
  for(let i = 0; i< collection.length; i++)
  {
    let flag = true;
    for(let j = 0; j<srcKeys.length;j++)
    {
      if(!(collection[i][srcKeys[j]] === source[srcKeys[j]]))
      {
        flag = false;
      }
    }
  
  if(flag)
   {
    arr.push(collection[i]);
   }
  } */
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
