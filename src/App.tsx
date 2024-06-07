import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Card } from './Components/Card/Card'
import { useEffect, useState } from 'react'

import styles from './App.module.css'

type Stat = {
  name: 'HP' | 'ATK' | 'DEF' | 'SAT' | 'SDF' | 'SPD'
  value: number
}

type Pokemon = {
  name: string
  id: number
  types: string[]
  height: number
  weight: number
  stats: Stat[]
  image: string
  isVisible: boolean
}

type PokemonDTO = {
  name: 'bulbasur'
  id: number
  types: { type: { name: string; url: string } }[]
  height: number
  weight: number
  stats: { base_stat: number; stat: { name: string } }[]
  sprites: { other: { 'official-artwork': { front_default: string } } }
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function getAPI() {
    const response = await fetch('https://pokeapi.co/api/v2/generation/1')
    const json = await response.json()
    const pokemons: { name: string; url: string }[] = json.pokemon_species
    console.log(pokemons[0])

    const promises = pokemons.map(async pokemon => {
      const name = pokemon.name
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const json: PokemonDTO = await response.json()

      const id = json.id
      const types = json.types.map(typeObject => typeObject.type.name)
      const height = json.height
      const weight = json.weight
      const stats = json.stats.map(statObject => {
        const statName = statObject.stat.name
        let name
        if (statName === 'hp') name = 'HP'
        if (statName === 'attack') name = 'ATK'
        if (statName === 'defense') name = 'DEF'
        if (statName === 'special-attack') name = 'SAT'
        if (statName === 'special-defense') name = 'SDF'
        if (statName === 'speed') name = 'SPD'
        return { name, value: statObject.base_stat }
      })
      const image = json.sprites.other['official-artwork'].front_default

      return { name, id, types, height, weight, stats, image, isVisible: true }
    })

    const results = await Promise.all(promises)
    // console.log('RESULTS', results)

    setPokemons(results)
    setIsLoading(false)
  }

  useEffect(() => {
    getAPI()
  }, [])

  return (
    <>
      <Header />
      <SearchBar />
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {isLoading
        ? 'loading'
        : pokemons.map(pokemon => <p>{pokemon.types[0]}</p>)}
    </>
  )
}

export default App
