let deckId = "";

function handleClick() {
  fetch("https://www.deckofcardsapi.com/api/deck/new/")
    .then((res) => res.json())
    .then((data) => (deckId = data.deck_id));
  console.log(deckId);
}

function drawCard() {
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("card-display").innerHTML = `
            <img src="${data.cards[0].image}" />
      `;
    });
}

document.getElementById("new-deck").addEventListener("click", handleClick);
document.getElementById("draw-card").addEventListener("click", drawCard);
