for (const [index, card] of data.entries()) {
  const li = document.createElement("li");
  li.className = "card";
  li.id = `card_${index}`;

  const h = document.createElement("h2");
  h.className = "card--title";
  const img = document.createElement("img");
  img.width = "256";
  img.className = "card--img";
  img.src = card.sprites.other["official-artwork"].front_default;

  const ul = document.createElement("ul");
  ul.className = "card--text";

  for (stat of card.stats) {
    const name = stat.stat.name;
    const value = stat.base_stat;
    const statString = `${name}: ${value}`;
    const sli = document.createElement("li");
    sli.innerText = statString;
    ul.appendChild(sli);
  }

  li.appendChild(h);
  li.appendChild(img);
  li.appendChild(ul);

  const cardList = document.querySelector(".cards");
  li.addEventListener("click", () => cardClicked(index));
  cardList.appendChild(li);
}

function cardClicked(id) {
  const images = [
    data[id].sprites.back_default,
    data[id].sprites.back_female,
    data[id].sprites.back_shiny,
    data[id].sprites.back_shiny_female,
    data[id].sprites.front_default,
    data[id].sprites.front_female,
    data[id].sprites.front_shiny,
    data[id].sprites.front_shiny_female,
    data[id].sprites.other.dream_world.front_default,
    data[id].sprites.other.dream_world.front_female,
    data[id].sprites.other["official-artwork"].front_default,
  ].filter(el => el !== null);
  const card = document.querySelector(`#card_${id}`);
  let img = card.querySelector("img");
  img.src = images[(images.findIndex((i) => i == img.src) + 1) % images.length];
}
