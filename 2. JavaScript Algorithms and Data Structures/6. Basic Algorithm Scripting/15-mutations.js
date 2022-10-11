function mutation(arr) {
let base = arr[0].toLowerCase();
let test = arr[1].toLowerCase();

for (let i = 0; i < test.length; i++){
  if (base.indexOf(test[i]) < 0) return false; }
   return true;
}

console.log(mutation(["hello", "hey"]));
