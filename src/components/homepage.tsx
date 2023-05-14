import React from "react";
import { ExternalPokemon, ExternalPokemonListProps, ExternalPokemonProps, PokemonProfile } from "../types/pokemon";
import "./homepage-version2.css";

function PokemonProfilePreview({ pokemon }: ExternalPokemonProps) {
  let pokemonProfile: PokemonProfile = {
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    pokedexId: pokemon.pokedexId,
    name: pokemon.name,
    types: pokemon.type
};

  return (
    <li className="flex-item">
      <div className="flex-container vertical pokemon-profile">
          <div>
            <img src={pokemonProfile.imageUrl} alt={pokemonProfile.name} />
          </div>
          <div className="pokemon-info">
            <div className="pokemon-pokedex-number">
              #{pokemonProfile.pokedexId}
            </div>
            <div className="pokemon-name">
              {pokemonProfile.name}
            </div>
            <div>
              {pokemonProfile.types.map((type) => { 
                  return <div className={"pill background-colour-" + type.toLowerCase()}>{type}</div>
              })}
            </div>
          </div>
        </div>
    </li>
  );
}

export default function PokemonUnorderedList({ pokemons }: ExternalPokemonListProps){
  const pokemonListItems: any = [];

  pokemons.forEach((p: ExternalPokemon) => {
    pokemonListItems.push(<PokemonProfilePreview pokemon={ p } />);
  });

  return (
    <ul className="flex-container horizontal">{ pokemonListItems }</ul>
  );
}