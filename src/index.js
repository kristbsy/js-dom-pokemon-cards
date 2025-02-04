for (card of data) {
  const li = document.createElement("li");
  li.className = "card";

  const h = document.createElement("h2");
  h.className = "card--title";
  const img = document.createElement("img");
  img.width = "256";
  img.className = "card--img";
  img.src = card.sprites.front_default;

  const ul = document.createElement("ul");
  ul.className = "card--text";

  for (stat of card.stats) {
    const name = stat.stat.name;
    const value = stat.base_stat;
    const statString = `${name}: ${value}`;
    const sli= document.createElement("li");
    sli.innerText = statString;
    ul.appendChild(sli);
  }

  li.appendChild(h);
  li.appendChild(img);
  li.appendChild(ul);

  const cardList = document.querySelector(".cards");
  cardList.appendChild(li);
}
