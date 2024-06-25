import { Pokemon } from '../domain/Pokemon.model'
import { PokemonRepository } from '../domain/PokemonRepository'
import { PokeApiRepository } from '../infraestructure/PokeApiRepository'

let repository: PokemonRepository

const getPokemons = async (): Promise<Pokemon[]> => {
  return repository.getPokemons()
}
const getMoves = async (pokemon: Pokemon) => {
  return repository.getMoves(pokemon)
}

export const pokemonService = {
  getPokemons,
  getMoves,
  init: (pokeApi: PokeApiRepository) => {
    repository = pokeApi
  },
}
