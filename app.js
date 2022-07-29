let deckId = "";

function handleClick() {
  fetch("https://www.deckofcardsapi.com/api/deck/new/")
    .then((res) => res.json())
    .then((data) => (data.deck_id = deckId));
}

document.getElementById("new-deck").addEventListener("click", handleClick);
