import { Move, Pokemon } from './Pokemon.model'

export interface PokemonRepository {
  getPokemons: () => Promise<Pokemon[]>
  getMoves: (pokemonSelected: Pokemon) => Promise<Move[]>
}
