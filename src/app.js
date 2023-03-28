//Uncomment to restore window.onLOad() function
// Works without window.onload()
/* window.onload = function() {
  //write your code here
  renderNewRandomCard();
}; */

// Data
const cardSuits = ["heart", "diamond", "club", "spade"];
const cardValue = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J"
];

// Main Function
const renderNewRandomCard = () => {
  // SubFunction #1: get random number in given range
  const getRandomNumberInRange = number => Math.floor(Math.random() * number);

  // Subfunction #2; render value
  const renderCardValue = value => {
    let displayValue = document.querySelector(".card-value");
    displayValue.innerHTML = value;
  };

  // Subfunction #3: render Suit
  const renderCardSuit = (suit, color) => {
    let displaySuit = document.querySelectorAll("i");
    let iconClass = "bi bi-suit-" + suit + "-fill fs-1";
    displaySuit[0].setAttribute("class", iconClass);
    displaySuit[0].style.color = color;
    displaySuit[1].setAttribute("class", iconClass);
    displaySuit[1].style.color = color;
  };

  // Function body: get random card specs
  let randomIndex = getRandomNumberInRange(cardSuits.length);
  let suitColor = randomIndex < 2 ? "red" : "black";
  let randomSuit = cardSuits[randomIndex];
  let randomValue = cardValue[getRandomNumberInRange(cardValue.length)];

  // Render value
  renderCardValue(randomValue);

  // Render suit
  renderCardSuit(randomSuit, suitColor);
};

// Calls main function
renderNewRandomCard();

// Additional features
// Feeling confident Challenge #1: listen to button to randomize card
let randomizeButton = document.querySelector("button");
randomizeButton.addEventListener("click", renderNewRandomCard);

// Feeling confident Challenge #2: auto-randomize card after 10 seconds
setInterval(renderNewRandomCard, 10000);

// Feeling confident Challenge #3: allow user to resize card
let newCard = document.querySelector(".card");
let heightInput = document.querySelector('input[name="height"]');
let widthInput = document.querySelector('input[name="width"]');
heightInput.addEventListener(
  "input",
  () => (newCard.style.height = heightInput.value + "px")
);
widthInput.addEventListener(
  "input",
  () => (newCard.style.width = widthInput.value + "px")
);
