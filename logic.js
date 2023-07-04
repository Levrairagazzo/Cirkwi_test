const pokemonItems = document.querySelectorAll('.pokemon-item');

pokemonItems.forEach(pokemonItem => {
    pokemonItem.addEventListener('click', () => {
        const pokemonName = pokemonItem.querySelector('.pokemon-name');
        const pokemonCard = pokemonItem.querySelector('.pokemon-card');

        pokemonCard.classList.toggle('active');
        pokemonName.classList.toggle('active');
    } )
})
