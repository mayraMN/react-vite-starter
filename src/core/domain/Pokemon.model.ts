export type Stat = {
  name: 'HP' | 'ATK' | 'DEF' | 'SAT' | 'SDF' | 'SPD'
  value: number
}

export type Pokemon = {
  name: string
  id: number
  types: string[]
  height: number
  weight: number
  stats: Stat[]
  image: string
  isVisible: boolean
}

export type PokemonDTO = {
  name: string
  id: number
  types: { type: { name: string } }[]
  height: number
  weight: number
  stats: { base_stat: number; stat: { name: string } }[]
  sprites: { other: { 'official-artwork': { front_default: string } } }
}
