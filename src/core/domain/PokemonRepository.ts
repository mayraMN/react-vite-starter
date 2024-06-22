import { Pokemon, PokemonMoves } from './Pokemon.model'

export interface PokemonRepository {
  get: () => Promise<Pokemon[]>
  getMoves: (pokemonName: string) => Promise<PokemonMoves[]>
}
