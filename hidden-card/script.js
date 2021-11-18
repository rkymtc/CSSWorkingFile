const card = document.querySelector(".card");

card.onclick = function () {
  if (card.className == "card") {
    card.className = "card full";
  } else {
    card.className = "card";
  }
};