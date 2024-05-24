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
    let previousPokemonName = null;
    while (current) {
        const pokemonName = current.species.name;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();

        const div = document.createElement('div');
        div.className = 'evolution-step';
        div.style.textAlign = 'left';

        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        div.appendChild(img);

        const a = document.createElement('a');
        a.href = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        a.textContent = pokemonName;
        div.appendChild(a);

        container.appendChild(div);

        previousPokemonName = pokemonName;
        current = current.evolves_to[0];
    }
}
