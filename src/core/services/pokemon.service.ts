import { Pokemon } from '../domain/Pokemon.model'
import { PokeApiRepository } from '../infraestructure/PokeApiRepository'

const getAll = async (): Promise<Pokemon[]> => {
  const pokeApi = new PokeApiRepository()
  return await pokeApi.get()
}

export const pokemonService = {
  getAll,
}
