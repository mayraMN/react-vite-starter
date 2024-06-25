import styles from './CardReverse.module.css'
import { capitalizeFirstLetter, formatIdNumber, iconsDic } from '../Utils/Utils'
import { Pokemon } from '../../core/domain/Pokemon.model'

type Props = {
  pokemon: Pokemon
  onClick: (pokemon: Pokemon) => void
}
export const CardReverse: React.FC<Props> = ({ pokemon, onClick }) => {
  return (
    <article
      className={`${styles.cardReverse} ${styles[pokemon.types[0]]}`}
      onClick={() => onClick(pokemon)}
    >
      <header className={styles.cardHeader}>
        <h2 className={styles.name}>{capitalizeFirstLetter(pokemon.name)}</h2>
        <div className={styles.number}>#{formatIdNumber(pokemon.id)}</div>
      </header>
      <div className={styles.cardInfo}>
        <img className={styles.image} src={pokemon.image} alt="" />
        <h3>Attacks</h3>
        <ul className={styles.tags}>
          {pokemon.moves.map(move => {
            return (
              <li
                className={`${styles.tag} ${styles[move.type]}`}
                key={move.name}
              >
                {iconsDic[move.type]}
                <p>{capitalizeFirstLetter(move.name)}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}
