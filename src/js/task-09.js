function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector(".change-color");
const changeColor = document.querySelector(".color");

button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor()
});











//  button.addEventListener("click", () => {
//   changeColor.style.backgroundColor = function getRandomHexColor()
//  }
//  );

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);

// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });