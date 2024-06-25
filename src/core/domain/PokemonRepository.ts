import { Move, Pokemon } from './Pokemon.model'

export interface PokemonRepository {
  get: () => Promise<Pokemon[]>
  getMoves: (pokemonSelected: Pokemon) => Promise<Move[]>
}
