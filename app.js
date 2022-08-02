let deckId = "";

if (!deckId) {
}

function handleClick() {
  fetch("https://www.deckofcardsapi.com/api/deck/new/")
    .then((res) => res.json())
    .then((data) => (deckId = data.deck_id));
  console.log(deckId);
}

function drawCard() {
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("card-display").innerHTML = `
            <img class="card-img" src="${data.cards[0].image}" />
            <img class="card-img" src="${data.cards[1].image}" />
      `;
    });
}

function determineWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];

  let card1Index = valueOptions.indexOf(card1);
  let card2Index = valueOptions.indexOf(card2);

  if (card1Index > card2Index) {
    console.log("player 1 wins");
  } else if (card1Index === card2Index) {
    console.log("It's a draw");
  } else {
    console.log("player 2 wins");
  }
}

document.getElementById("new-deck").addEventListener("click", handleClick);
document.getElementById("draw-card").addEventListener("click", drawCard);

let card1 = "7";
let card2 = "KING";

determineWinner(card1, card2);
