const categoriesItem = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categoriesItem.length);

categoriesItem.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName} / Elements: ${categoryElements}`);
});
