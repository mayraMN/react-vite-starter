import { useEffect, useState } from 'react'

import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Footer } from './Components/Footer/Footer'
import { NoResults } from './Components/NoResults/NoResults'
import { ErrorLoading } from './Components/ErrorLoading/ErrorLoading'

import styles from './App.module.css'
import { Pokemon } from './core/domain/Pokemon.model'
import { CardList } from './Components/CardList/CardList'
import { pokemonService } from './core/services/pokemon.service'
import { PokeApiRepository } from './core/infraestructure/PokeApiRepository'

pokemonService.init(new PokeApiRepository())

export function App() {
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>(undefined)
  const [searchValue, setSearchValue] = useState<string>('')
  const [apiError, setApiError] = useState<boolean>(false)

  useEffect(() => {
    const firstRender = async () => {
      const results = await pokemonService.getAll()
      if (results.length === 0) {
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
    const filteredPokemons = pokemons?.filter(pokemon => {
      if (pokemon.name.startsWith(searchValueLowerCase)) {
        return true
      }
      if (pokemon.types.some(type => type.startsWith(searchValueLowerCase))) {
        return true
      }
    })
    // if (filterPokemon !== undefined) return filteredPokemons
    return filteredPokemons
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
