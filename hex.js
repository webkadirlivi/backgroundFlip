//COMPLATELY RANDOM , HEX CODES
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function generateRandomHexCode() {
  const hexChars = "0123456789ABCDEF";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    //for ile 6 basmaklı
    const randomIndex = Math.floor(Math.random() * hexChars.length);
    hexCode += hexChars[randomIndex];
  }

  return hexCode;
}

// Örnek kullanım:
btn.addEventListener("click", function () {
  document.body.style.backgroundColor = generateRandomHexCode();
  color.innerHTML = generateRandomHexCode();
});
