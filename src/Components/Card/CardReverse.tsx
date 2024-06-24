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
        <p>Level 1</p>
        <img className={styles.image} src={pokemon.image} alt="" />
        <div className={styles.tags}>
          {pokemon.types.map(type => {
            return (
              <div className={`${styles.tag} ${styles[type]}`} key={type}>
                {iconsDic[type]}
                {capitalizeFirstLetter(type)}
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}
