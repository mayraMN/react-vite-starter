import { Pokemon } from '../domain/Pokemon.model'
import { PokemonRepository } from '../domain/PokemonRepository'
import { PokeApiRepository } from '../infraestructure/PokeApiRepository'

let repository: PokemonRepository

const getAll = async (): Promise<Pokemon[]> => {
  return repository.get()
}
const getPokemonAttack = async () => {}

export const pokemonService = {
  getAll,
  getPokemonAttack,
  init: (pokeApi: PokeApiRepository) => {
    repository = pokeApi
  },
}
