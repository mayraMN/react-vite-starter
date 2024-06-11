import { describe, it, expect } from 'vitest'
import { PokemonDTO } from '../../../App'

describe('Pokemon services', () => {
  it('Pokemon service getAll', () => {
    const mockPokemons: PokemonDTO[] = [
      {
        name: 'bulbasur',
        id: 1,
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
        height: 7,
        weight: 69,
        stats: [
          { base_stat: 45, stat: { name: 'hp' } },
          { base_stat: 49, stat: { name: 'attack' } },
          { base_stat: 49, stat: { name: 'defense' } },
          { base_stat: 65, stat: { name: 'special-attack' } },
          { base_stat: 65, stat: { name: 'special-defense' } },
          { base_stat: 45, stat: { name: 'speed' } },
        ],
        sprites: {
          other: {
            'official-artwork': {
              front_default:
                'https://raw.githubuserco…r/official-artwork/1.png',
            },
          },
        },
      },
    ]
    function createFetchResponse(data) {
      return { json: () => new Promise(resolve => resolve(data)) }
    }
  })
})
