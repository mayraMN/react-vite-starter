import { Pokemon } from '../../core/domain/Pokemon.model'
import { Card } from '../Card/Card'
import { CardLoading } from '../Card/CardLoading'
import { CardReverse } from '../Card/CardReverse'
import styles from './CardList.module.css'

type CardListProps = {
  pokemons: Pokemon[] | undefined
}

export const CardList: React.FC<CardListProps> = ({ pokemons }) => {
  return (
    <div className={styles.cardList} data-testid="cardListLoaded">
      {pokemons?.map(pokemon => {
        return (
          <CardReverse
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
            stats={pokemon.stats}
            image={pokemon.image}
            moves={pokemon.moves}
          />
        )
      })}
    </div>
  )
  // if (pokemons === undefined) {
  //   return (
  //     <div className={styles.cardList} data-testid="cardListLoading">
  //       <CardLoading />
  //       <CardLoading />
  //       <CardLoading />
  //     </div>
  //   )
  // }

  // return (
  //   <div className={styles.cardList} data-testid="cardListLoaded">
  //     {pokemons?.map(pokemon => {
  //       return (
  //         <Card
  //           key={pokemon.id}
  //           name={pokemon.name}
  //           id={pokemon.id}
  //           types={pokemon.types}
  //           height={pokemon.height}
  //           weight={pokemon.weight}
  //           stats={pokemon.stats}
  //           image={pokemon.image}
  //           moves={pokemon.moves}
  //         />
  //       )
  //     })}
  //   </div>
}
