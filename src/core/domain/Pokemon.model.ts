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
  movesInfo: { url: string; levelLearnedAt: number }[]
  moves: Move[]
  showBack: boolean
}

export type PokemonDTO = {
  name: string
  id: number
  types: { type: { name: string } }[]
  height: number
  weight: number
  stats: { base_stat: number; stat: { name: string } }[]
  sprites: { other: { 'official-artwork': { front_default: string } } }
  moves: {
    move: { name: string; url: string }
    version_group_details: { level_learned_at: number }[]
  }[]
}

export type Move = {
  name: string
  type: string
  levelLearnedAt: number
  accuracy?: number
  damage?: number
}

export type MoveDTO = {
  accuracy: number
  name: string
  power: number
  type: { name: string }
}
