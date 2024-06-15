import { useEffect, useState } from 'react'
import { pokemonService } from './core/services/pokemon.service'

import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Footer } from './Components/Footer/Footer'
import { Loaded } from './Components/CardList/Loaded/Loaded'
import { Loading } from './Components/CardList/Loading/Loading'
import { NoResults } from './Components/NoResults/NoResults'
import { ErrorLoading } from './Components/ErrorLoading/ErrorLoading'

import styles from './App.module.css'

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
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>(undefined)
  const [searchValue, setSearchValue] = useState<string>('')
  const [apiError, setApiError] = useState<boolean>(false)

  useEffect(() => {
    const firstRender = async () => {
      const results = await pokemonService.getAll()
      if (results === null) {
        setApiError(true)
        return
      }
      setPokemons(results)
    }

    firstRender()
  }, [])

  const onChange = (inputValue: string) => {
    setSearchValue(inputValue)
  }
  const filterPokemon = () => {
    return pokemons?.filter(pokemon => {
      return pokemon.name.startsWith(searchValue.toLowerCase())
    })
  }

  const filteredPokemons = filterPokemon()

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <SearchBar onChange={onChange} />
        {apiError ? (
          <ErrorLoading />
        ) : (
          <>
            {pokemons === undefined && <Loading />}
            {filteredPokemons?.length !== 0 && (
              <Loaded filterPokemon={filteredPokemons} />
            )}
            {filteredPokemons?.length === 0 && (
              <NoResults searchValue={searchValue} />
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
