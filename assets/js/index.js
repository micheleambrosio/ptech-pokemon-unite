listPokemons();

function listPokemons(){
  fetch('https://6283929f92a6a5e462260498.mockapi.io/pokemon')
  .then(response => response.json())
  .then(data => {
    const pokemons = data.map((item) => getContentCard(item));

		document.querySelector(".card__container").innerHTML = pokemons.join('');
  });
}

function getContentCard(data){
    return `
    <a id="${data.id}" class="card" href="/${data.id}.html" style="background-color:${data.color || 'red'}">
      <img class="card__image" src="/assets/images/stat/stat-${data.avatar}.png" alt="${data.name}">
      <div class="card__title"> ${data.name}</div>
    </a>
    `;
}