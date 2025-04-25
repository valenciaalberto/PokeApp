const BASE_POKE_API_URL = "https://pokeapi.co/api/v2/";
const BASE_POKE_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const BASE_POKEMON_DETAIL_URL = "https://pokeapi.co/api/v2/pokemon/";
type Props = {
  numberOfPokemons: number;
};

export async function getPokemonList({ numberOfPokemons }: Props) {
  const POKEMON_LIST = BASE_POKE_API_URL + `pokemon?limit=${numberOfPokemons}`;

  try {
    const rawData = await fetch(POKEMON_LIST);
    const json = await rawData.json();
    let count = 0;

    return json.results.map((pokemon) => {
      const { name, url } = pokemon;
      count++;

      const img = BASE_POKE_IMG_URL + `${count}.png`;

      return {
        name,
        url,
        count,
        img,
      };
    });
  } catch (error) {
    return Promise.reject("Oh no! la API no está funcionando!");
  }
}

export async function getPokemonDetails(pokemonName) {
  try {
    const POKEMON_DETAILS = BASE_POKEMON_DETAIL_URL + pokemonName;
    const rawData = await fetch(POKEMON_DETAILS);
    const json = await rawData.json();

    const { id, types, base_experience, height, stats } = json;

    const img = BASE_POKE_IMG_URL + `${id}.png`;

    return {
      id,
      types,
      base_experience,
      height,
      stats,
      img,
    };
  } catch (error) {
    return Promise.reject(
      "Oh no! la API no ha funciona al tratar de traer más información del pokemón, trate de actualizar e intentarlo de nuevo."
    );
  }
}
