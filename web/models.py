import requests

POKEAPI_URL = "https://pokeapi.co/api/v2"


def get_pokemon_data(pokemon_name):
    response = requests.get(f"{POKEAPI_URL}/pokemon/{pokemon_name.lower()}")

    return response.json()


def get_evo_chain(pokemon_id):
    response = requests.get(f"{POKEAPI_URL}/pokemon-species/{pokemon_id}")
    species_data = response.json()
    evo_chain_url = species_data["evolution_chain"]["url"]
    response = requests.get(evo_chain_url)

    return response.json()
