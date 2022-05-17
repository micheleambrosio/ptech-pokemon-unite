listPokemons();

function listPokemons(){
  const request = new XMLHttpRequest();
  request.open('GET', '/assets/json/listPokemons.json');
  
  request.onload = function() {
    const data = JSON.parse(request.response);
    const pokemons = data.map((item) => getContentCard(item));

    document.getElementById('card__container').innerHTML = pokemons
  };
  request.send();
}

function getContentCard(data){
    return `
    <a id="${data.id}" class="card" href="/${data.page}.html" style="background-color:${data.color}">
      <img class="card__image" src="${data.avatar}" alt="${data.name}">
      <div class="card__title"> ${data.name}</div>
    </a>
    `;

}
