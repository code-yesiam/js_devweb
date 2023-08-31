const pokemonOl = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokeModal = document.getElementById('showDetail')
const limit = 5
let offset = 0

function loadPokemonItens(offset, limit) {
    

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) => `
            <li id="${pokemon.name}" class="pokemon ${pokemon.type} info" onclick="openInfo()">
                <span class="number">#${pokemon.number}</span>
                <span class="name">
                    <a href="#poke-modal" id="showDetail">${pokemon.name}</a>
                </span>
                    <div class="detail">
                        <ol class="types">
                           ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
            </li>
            `).join('')
            /* <div id="poke-modal" class="modal">
                    <div class="poke-modal-content ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">
                            <a href="#">${pokemon.name}</a>
                        </span>
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </div>
            </div>*/

            pokemonOl.innerHTML += newHtml
        }
    )
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

function openInfo(pokemon) {
    const modalNumber = document.getElementById(`${}`);

    modalNumber.textContent = `#${pokemon.number}`;
    modalName.textContent = pokemon.name;
    modalImage.src = pokemon.photo;

    modalTypes.innerHTML = pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('');
}

pokeModal.addEventListener('click', () => {
    
})
