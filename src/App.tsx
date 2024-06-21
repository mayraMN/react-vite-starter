import { useEffect, useState } from 'react'
import { pokemonService } from './core/services/pokemon.service'

import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Footer } from './Components/Footer/Footer'
import { NoResults } from './Components/NoResults/NoResults'
import { ErrorLoading } from './Components/ErrorLoading/ErrorLoading'

import styles from './App.module.css'
import { Pokemon } from './core/domain/Pokemon.model'
import { CardList } from './Components/CardList/CardList'

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
    const searchValueLowerCase = searchValue.toLowerCase()

    return pokemons?.filter(pokemon => {
      if (pokemon.name.startsWith(searchValueLowerCase)) {
        return true
      }
      if (pokemon.types.some(type => type.startsWith(searchValueLowerCase))) {
        return true
      }
    })
  }

  const filteredPokemons = filterPokemon()

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <SearchBar onChange={onChange} />
        {apiError ? (
          <ErrorLoading />
        ) : (
          <>
            <CardList pokemons={filteredPokemons} />
            {/* {pokemons === undefined && <Loading />}
            {filteredPokemons?.length !== 0 && (
              <Loaded filterPokemon={filteredPokemons} />
            )} */}
            {filteredPokemons?.length === 0 && (
              <NoResults searchValue={searchValue} />
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
