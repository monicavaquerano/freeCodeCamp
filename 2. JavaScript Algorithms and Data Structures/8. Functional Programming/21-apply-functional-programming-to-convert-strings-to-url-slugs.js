// Only change code below this line
function urlSlug(title) {
let lower = title.toLowerCase();
let arr = lower.split(" ");
let words = arr.filter(word => {
  return word;
});
const url = words.reduce((array, word) => {
  return array + "-" + word;
});

return url;

}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));
