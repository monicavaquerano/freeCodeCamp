function destroyer(arr) {
  let toDestroy = Object.values(arguments).slice(1);
  let newArr = [];

  for (let i = 0; i < arr.length; i++)
  {
    let removeElement = false;
  for (let j = 0; j < toDestroy.length; j++)
  {
    if (arr[i] === toDestroy[j])
    {
      removeElement = true;
    }
  }
  if (!removeElement)
  {
    newArr.push(arr[i]);
  }
}
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
