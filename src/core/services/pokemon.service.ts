import { Pokemon } from '../domain/Pokemon.model'
import { PokemonRepository } from '../domain/PokemonRepository'
import { PokeApiRepository } from '../infraestructure/PokeApiRepository'

let repository: PokemonRepository

const getAll = async (): Promise<Pokemon[]> => {
  return repository.get()
}

export const pokemonService = {
  getAll,
  init: (pokeApi: PokeApiRepository) => {
    repository = pokeApi
  },
}
