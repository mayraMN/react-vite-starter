import { useState } from 'react'
import { Pokemon } from '../../core/domain/Pokemon.model'
import { Card } from '../Card/Card'
import { CardLoading } from '../Card/CardLoading'
import { CardReverse } from '../Card/CardReverse'
import styles from './CardList.module.css'

type CardListProps = {
  pokemons: Pokemon[] | undefined
}

export const CardList: React.FC<CardListProps> = ({ pokemons }) => {
  const [cardsState, setCardsState] = useState<Pokemon[] | undefined>(pokemons)

  const handleClick = (pokemon: Pokemon) => {
    console.log(pokemon.name)
    const pokemonName = pokemon.name

    setCardsState(prev =>
      prev?.map(pokemon => {
        if (pokemon.name === pokemonName) {
          return {
            name: pokemon.name,
            id: pokemon.id,
            types: pokemon.types,
            height: pokemon.height,
            weight: pokemon.weight,
            stats: pokemon.stats,
            image: pokemon.image,
            moves: pokemon.moves,
            showBack: !pokemon.showBack,
          }
        }
        return pokemon
      }),
    )
  }
  if (pokemons === undefined) {
    return (
      <div className={styles.cardList} data-testid="cardListLoading">
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </div>
    )
  }
  if (pokemons.length > 0 && cardsState === undefined) {
    setCardsState(pokemons)
  }

  return (
    <div className={styles.cardList} data-testid="cardListLoaded">
      {cardsState?.map(pokemon => {
        const showBack = pokemon.showBack ? 'showBack' : ''
        // return <Card key={pokemon.id} pokemon={pokemon} onClick={handleClick} />
        return (
          <div className={`${styles.cardContainer} ${showBack}`}>
            <div className={`${styles.front} ${styles.card}`}>
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                onClick={handleClick}
              ></Card>
            </div>
            <div className={`${styles.back} ${styles.card}`}>
              <CardReverse
                key={pokemon.id}
                pokemon={pokemon}
                onClick={handleClick}
              ></CardReverse>
            </div>
          </div>
        )
      })}
    </div>
  )
}
