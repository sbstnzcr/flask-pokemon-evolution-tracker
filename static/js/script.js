document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('/search', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                displayEvolutionChain(data.evolution_chain.chain);
            }
        });
});

async function displayEvolutionChain(chain) {
    const container = document.getElementById('evolution-chain');
    container.innerHTML = '';

    let current = chain;
    while (current) {
        const pokemonName = current.species.name;
        const pokemonData = await getPokemonData(pokemonName);
        container.appendChild(createPokemonCard(pokemonData));

        if (current.evolves_to.length > 1) {
            for (let i = 0; i < current.evolves_to.length; i++) {
                const nextPokemonName = current.evolves_to[i].species.name;
                const nextPokemonData = await getPokemonData(nextPokemonName);
                container.appendChild(createPokemonCard(nextPokemonData));
            }
            break;
        }

        current = current.evolves_to[0];
    }
}

function getPokemonData(pokemonName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

function createPokemonCard(pokemon) {
    const div = document.createElement('div');
    div.className = 'card m-2';
    div.style.width = '8rem';

    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    img.className = 'card-img-top';

    const body = document.createElement('div');
    body.className = 'card-body p-2';

    const title = document.createElement('h6');
    title.className = 'card-title text-capitalize';
    title.textContent = pokemon.species.name;

    body.appendChild(title);
    div.appendChild(img);
    div.appendChild(body);

    return div;
}
