import styles from './CardReverse.module.css'
import { capitalizeFirstLetter, formatIdNumber, iconsDic } from '../Utils/Utils'
import { Pokemon } from '../../core/domain/Pokemon.model'
export const CardReverse: React.FC<Pokemon> = ({ name, id, types, image }) => {
  return (
    <article className={`${styles.cardReverse} ${styles[types[0]]}`}>
      <header className={styles.cardHeader}>
        <h2 className={styles.name}>{capitalizeFirstLetter(name)}</h2>
        <div className={styles.number}>#{formatIdNumber(id)}</div>
      </header>
      <div className={styles.cardInfo}>
        <p>Level 1</p>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.tags}>
          {types.map(type => {
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
