import React from 'react'
import type { Pokemon } from '../../../App'
import { Card } from '../../Card/Card'
import styles from '../CardList.module.css'

type LoadedProps = {
  filterPokemon: () => Pokemon[]
}

export const Loaded: React.FC<LoadedProps> = ({ filterPokemon }) => {
  return (
    <div className={styles['cards-list']}>
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
  )
}
