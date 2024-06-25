import {
  Move,
  MoveDTO,
  Pokemon,
  PokemonDTO,
  Stat,
} from '../domain/Pokemon.model'
import { PokemonRepository } from '../domain/PokemonRepository'
import { apiClient } from './apiClient.service'

export class PokeApiRepository implements PokemonRepository {
  getPokemons = async () => {
    try {
      const json = await apiClient.get('https://pokeapi.co/api/v2/generation/1')
      const pokemons: { name: string; url: string }[] = json.pokemon_species

      const promises = pokemons.map(async pokemon => {
        const name = pokemon.name
        const json: PokemonDTO = await apiClient.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
        )
        const id = json.id
        const types = json.types.map(typeObject => typeObject.type.name)
        const height = json.height
        const weight = json.weight
        const stats: Stat[] = json.stats.map(statObject => {
          const statName = statObject.stat.name
          const mappedStats: Record<
            string,
            'HP' | 'ATK' | 'DEF' | 'SAT' | 'SDF' | 'SPD'
          > = {
            hp: 'HP',
            attack: 'ATK',
            defense: 'DEF',
            'special-attack': 'SAT',
            'special-defense': 'SDF',
            speed: 'SPD',
          }
          return { name: mappedStats[statName], value: statObject.base_stat }
        })
        const image = json.sprites.other['official-artwork'].front_default

        const movesInfo = json.moves.map(item => {
          const moveUrl = item.move.url
          const levelLearnedAt = item.version_group_details
            .map(item => {
              return item.level_learned_at
            })
            .sort()[0]
          // const leveLearnedAt = 1;
          return {
            url: moveUrl,
            levelLearnedAt: levelLearnedAt,
          }
        })
        const showBack = false
        const moves: Move[] = []
        return {
          name,
          id,
          types,
          height,
          weight,
          stats,
          image,
          movesInfo,
          moves,
          showBack,
        }
      })
      const results = await Promise.all(promises)
      results.sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id)

      return results
    } catch (e) {
      return []
    }
  }
  getMoves = async (pokemonSelected: Pokemon) => {
    const movesSorted = pokemonSelected.movesInfo.sort(
      (moveInfo1, moveInfo2) =>
        moveInfo1.levelLearnedAt - moveInfo2.levelLearnedAt,
    )
    const movesSelected = movesSorted.slice(0, 4)
    const promises = movesSelected.map(async moveItem => {
      const json: MoveDTO = await apiClient.get(moveItem.url)
      const name = json.name
      const type = json.type.name
      const levelLearnedAt = moveItem.levelLearnedAt
      const accuracy = json.accuracy
      const damage = json.power
      const result: Move = { name, type, levelLearnedAt, accuracy, damage }
      return result
    })

    const moves = await Promise.all(promises)
    console.log(moves)
    return moves
  }
}
