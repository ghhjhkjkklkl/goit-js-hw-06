const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map(ingredient => {
 
  const newLi = document.createElement("li");
  newLi.innerHTML = ingredient;
  return newLi;
}
);
console.log(ulList.append(...foodIngredients));























