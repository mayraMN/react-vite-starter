import { Pokemon } from '../domain/Pokemon.model'
import { PokeApiRepository } from '../infraestructure/PokeApiRepository'

const getAll = async (repository: PokeApiRepository): Promise<Pokemon[]> => {
  return repository.get()
}

export const pokemonService = {
  getAll,
}
