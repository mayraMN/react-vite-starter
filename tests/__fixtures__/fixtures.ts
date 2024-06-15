import { Pokemon } from '../../src/App'
export const pokemonsMock: Pokemon[] = [
  {
    name: 'bulbasaur',
    id: 1,
    types: ['grass', 'poison'],
    height: 7,
    weight: 69,
    stats: [
      {
        name: 'HP',
        value: 45,
      },
      {
        name: 'ATK',
        value: 49,
      },
      {
        name: 'DEF',
        value: 49,
      },
      {
        name: 'SAT',
        value: 65,
      },
      {
        name: 'SDF',
        value: 65,
      },
      {
        name: 'SPD',
        value: 45,
      },
    ],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    isVisible: true,
  },
  {
    name: 'ivysaur',
    id: 2,
    types: ['grass', 'poison'],
    height: 10,
    weight: 130,
    stats: [
      {
        name: 'HP',
        value: 60,
      },
      {
        name: 'ATK',
        value: 62,
      },
      {
        name: 'DEF',
        value: 63,
      },
      {
        name: 'SAT',
        value: 80,
      },
      {
        name: 'SDF',
        value: 80,
      },
      {
        name: 'SPD',
        value: 60,
      },
    ],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    isVisible: true,
  },
]
