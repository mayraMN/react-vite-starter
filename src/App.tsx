import { useEffect, useState } from 'react'
import { pokemonService } from './core/services/pokemon.service'

import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Footer } from './Components/Footer/Footer'
import { Loaded } from './Components/CardList/Loaded/Loaded'
import { Loading } from './Components/CardList/Loading/Loading'

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

type PageState = 'loading' | 'loaded' | 'noResults' | 'errorLoading'

export function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pageState, setPageState] = useState<PageState>('loading')
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const firstRender = async () => {
      const results = await pokemonService.getAll()
      setPokemons(results)
      setPageState('loaded')
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

      {pageState !== 'loaded' ? (
        <Loading />
      ) : (
        <Loaded filterPokemon={filterPokemon} />
      )}

      <Footer />
    </>
  )
}
