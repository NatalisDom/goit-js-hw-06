
const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

// Get all elements with class="example":
const list = categories.getElementsByClassName("item");

for (let item of list) {
  
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}