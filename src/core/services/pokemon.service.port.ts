import { Pokemon } from '../domain/Pokemon.model'
export interface pokemonServicePort {
  getPokemons: () => Promise<Pokemon[] | null>
}
