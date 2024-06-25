import { useState } from 'react'
import { Move, Pokemon } from '../../core/domain/Pokemon.model'
import { Card } from '../Card/Card'
import { CardLoading } from '../Card/CardLoading'
import { CardReverse } from '../Card/CardReverse'
import styles from './CardList.module.css'

type CardListProps = {
  pokemons: Pokemon[] | undefined
  getPokemons: (pokemon: Pokemon) => Promise<Move[]>
}

export const CardList: React.FC<CardListProps> = ({
  pokemons,
  getPokemons,
}) => {
  const [cardsState, setCardsState] = useState<Pokemon[] | undefined>(pokemons)

  const handleClick = async (pokemon: Pokemon) => {
    console.log(pokemon.name)
    const pokemonName = pokemon.name
    const pokemonMoves = await getPokemons(pokemon)
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
            movesInfo: pokemon.movesInfo,
            moves: pokemonMoves,
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
        return (
          <div
            className={`${styles.cardContainer} ${showBack && styles.showBack}`}
          >
            <div
              className={` ${styles.cardContainer} ${styles.front} ${styles.card} `}
            >
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                onClick={handleClick}
              ></Card>
            </div>
            <div
              className={` ${styles.cardContainer} ${styles.back} ${styles.card}`}
            >
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
