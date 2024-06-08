import styles from './Card.module.css'
import { Pokemon } from '../../App'

export const Card: React.FC<Pokemon> = ({
  name,
  id,
  types,
  height,
  weight,
  stats,
  image,
  //isVisible,
}) => {
  return (
    <article className={styles.card}>
      <header className={styles['card-header']}>
        <h2 className={styles['name']}>{name}</h2>
        <div className={styles['number']}>#{id}</div>
      </header>
      <div className={styles['card-info']}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles['tags']}>
          {types.map(type => {
            return (
              <div className={`${styles['tag']} ${styles.grass}`}>{type}</div>
            )
          })}
        </div>
        <div className={styles['chars']}>
          <div className={styles['char-weight']}>{weight / 10}kg</div>
          <div className={styles['chars-separator']}></div>
          <div className={styles['char-length']}>{height / 10}m</div>
        </div>
        <ul className={styles['stats']}>
          {stats.map(stat => {
            return (
              <li className={styles['stat-item']}>
                <label className={styles['stat-values']}>
                  <div className={styles['stat-name']}>{stat.name}</div>
                  <div>{stat.value}</div>
                </label>

                <progress value={stat.value} max="255" />
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}
