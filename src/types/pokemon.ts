export type ExternalPokemonListProps = {
    pokemons: Array<ExternalPokemon>;
}

export type ExternalPokemonProps = {
    pokemon: ExternalPokemon;
}

export type ExternalPokemon = {
    id: string;
    name: string;
    pokedexId: number;
    description: string;
    type: string[];
    weaknesses: string[];
    lastModifiedDateTime: string;
}

export type PokemonProfile = {
    imageUrl: string;
    pokedexId: number;
    name: string;
    types: string[];
}