import { Pokemon, PokemonMoves } from './Pokemon.model'

export interface PokemonRepository {
  get: () => Promise<Pokemon[]>
  getMoves: (pokemonSelected: Pokemon) => Promise<PokemonMoves>
}
