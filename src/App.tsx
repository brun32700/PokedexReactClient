import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonUnorderedList from './components/homepage';
import { ExternalPokemon } from './types/pokemon';

// To start the frontend server, run the following command in the terminal:
// npm start run

function FetchPokemon(){
  const [pokemon, setPokemon] = useState(Array<ExternalPokemon>(0));

  useEffect(() => {
    fetch("http://192.168.1.105:5007/pokedex")
    .then((response) => response.json())
    .then(jsonData => setPokemon(jsonData["pokemon"]))
    .catch((error) => console.log(error));
  }, []);

  console.log(pokemon);

  return pokemon
}

function App() {
  return (
    <PokemonUnorderedList pokemons={ FetchPokemon() }/>
    // <PokemonUnorderedList pokemons={ POKEMONS }/>
  );
}

const POKEMONS: Array<ExternalPokemon> =
[
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  },
  {
    "id": "5cfcc4c3-cf1b-423f-ae9b-5fa378b8ca34",
    "name": "Bulbasaur",
    "pokedexId": 1,
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Psychic",
      "Flying",
      "Ice"
    ],
    "lastModifiedDateTime": "2023-04-20T13:29:41.1347017Z"
  }
];

export default App;
