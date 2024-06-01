import styles from './Card.module.css'

export const Card = () => {
  return (
    <article className={styles.card}>
      <header className={styles['card-header']}>
        <h2 className={styles['pokemon-name']}>Bulbasaur</h2>
        <div className={styles['pokemon-number']}>#001</div>
      </header>
      {/* <img className="pokemon-image" src="/bulbasaur.png" alt="" /> */}
      <div className={styles['card-info']}>
        <div className={styles['pokemon-types']}>
          <div className={styles['pokemon-type-grass']}>Grass</div>
          <div className={styles['pokemon-type-poison']}>Poison</div>
        </div>
        <div className="pokemon-chars">
          <div className="pokemon-char-weight">6.9kg</div>
          <div className="pokemon-char-lenght">0.7m</div>
        </div>
        <ul className="pokemon-stats">
          <li className="pokemon-stat-item">
            <label>HP</label>
            <div>045</div>
            <progress value="20" max="255" />
          </li>
          <li className="pokemon-stat-item">
            <label>HP</label>
            <div>045</div>
            <progress value="20" max="255" />
          </li>
          <li className="pokemon-stat-item">
            <label>HP</label>
            <div>045</div>
            <progress value="20" max="255" />
          </li>
        </ul>
      </div>
    </article>
  )
}
