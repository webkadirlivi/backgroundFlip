//SİMPLE, NORMAL FROM OUR CHOOSE ARRAY

const colors = [
  "#000000",
  "#f1f2f1",
  "red",
  "green",
  "yellow",
  "rgba(133,122, 200",
  "#f15025",
];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = randomValue();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});

function randomValue() {
  return Math.floor(Math.random() * colors.length);
}

//COMPLATELY RANDOM , HEX CODES

function generateRandomHexCode() {
  const hexChars = "0123456789ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    hexCode += hexChars[randomIndex];
  }

  return hexCode;
}

// Örnek kullanım:
const randomHexCode = generateRandomHexCode();
console.log(randomHexCode); // Örneğin: "#1A2B3C"
