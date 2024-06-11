import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Card } from './Components/Card/Card'
import { useEffect, useState } from 'react'

import styles from './App.module.css'
import { Footer } from './Components/Footer/Footer'
import { getPokemons } from './core/services/getPokemons'

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
  name: 'bulbasur'
  id: number
  types: { type: { name: string; url: string } }[]
  height: number
  weight: number
  stats: { base_stat: number; stat: { name: string } }[]
  sprites: { other: { 'official-artwork': { front_default: string } } }
}

export function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const firstRender = async () => {
      const results = await getPokemons()
      console.log('RESULTS', results)
      setPokemons(results)
      console.log('hola', results)
      setIsLoading(false)
    }

    firstRender()
  }, [])

  return (
    <>
      <Header />
      <SearchBar />
      {/* {isLoading ? 'loading' : ''} */}
      <div className={styles.cards}>
        {pokemons.map(pokemon => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              id={pokemon.id}
              types={pokemon.types}
              height={pokemon.height}
              weight={pokemon.weight}
              stats={pokemon.stats}
              image={pokemon.image}
              isVisible={pokemon.isVisible}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}
