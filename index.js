const randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImages =
  "dice" + randomNumber1 + ".png"; /*random pic. pic-1 to pic-6 */
let randomImageSource = "images/" + randomDiceImages; //images/dice.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "image/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

// condition checking who win

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🔊 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🔊 Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "🧨 2 Player ties";
}
