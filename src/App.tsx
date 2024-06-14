import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Card } from './Components/Card/Card'
import { useEffect, useState } from 'react'

import styles from './App.module.css'
import { Footer } from './Components/Footer/Footer'
import { pokemonService } from './core/services/pokemon.service'

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

export function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const firstRender = async () => {
      const results = await pokemonService.getAll()
      setPokemons(results)
      setIsLoading(false)
    }

    firstRender()
  }, [])

  const onChange = (inputValue: string) => {
    setSearchValue(inputValue)
  }
  const filterPokemon = () => {
    return pokemons.filter(pokemon => {
      return pokemon.name.startsWith(searchValue)
    })
  }

  return (
    <>
      <Header />
      <SearchBar onChange={onChange} />
      {isLoading ? 'loading' : ''}
      <div className={styles.cards}>
        {filterPokemon().map(pokemon => {
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
