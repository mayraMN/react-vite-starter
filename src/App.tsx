import { Header } from './Components/Header/Header'
import { SearchBar } from './Components/SearchBar/SearchBar'
import { Card } from './Components/Card/Card'
import { useEffect, useState } from 'react'

type Stat = {
  name: "HP" | "ATK" | "DEF" | "SAT" | "SDF" | "SPD";
  value: number;
}

type Pokemon = {
  name: string;
  id: number;
  types: string[];
  height: number;
  weight: number;
  stats: Stat[];
  isVisible: boolean;
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  async function getApi() {
    const response = await fetch('https://pokeapi.co/api/v2/generation/1')
    const json = await response.json();
    const pokemons = json.pokemon_species;

    const names = pokemons.map(async (pokemon) => {
      const name = pokemon.name;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const json = await response.json();
      return json.name;
    })

    setPokemons(names)
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <>
      <Header />
      <SearchBar />
      <Card />
    </>
  )
}

export default App
