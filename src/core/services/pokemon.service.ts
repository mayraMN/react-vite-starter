import { PokemonDTO } from '../domain/Pokemon.model'
import { Pokemon, Stat } from '../domain/Pokemon.model'
import { apiClient } from '../infraestructure/apiClient.service'

const getAll = async (): Promise<Pokemon[] | null> => {
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

      return {
        name,
        id,
        types,
        height,
        weight,
        stats,
        image,
        isVisible: true,
      }
    })
    const results = await Promise.all(promises)
    results.sort((pokemonA, pokemonB) => pokemonA.id - pokemonB.id)

    return results
  } catch (e) {
    return null
  }
}

export const pokemonService = {
  getAll,
}
