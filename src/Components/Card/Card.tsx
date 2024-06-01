import styles from './Card.module.css'

export const Card = () => {
  return (
    <article className={styles.card}>
      <header className={styles['card-header']}>
        <h2 className={styles['name']}>Bulbasaur</h2>
        <div className={styles['number']}>#001</div>
      </header>
      {/* <img className="image" src="/bulbasaur.png" alt="" /> */}
      <div className={styles['card-info']}>
        <div className={styles['tags']}>
          <div className={`${styles['tag']} ${styles.grass}`}>Grass</div>
          <div className={`${styles['tag']} ${styles.poison}`}>Poison</div>
        </div>
        <div className={styles['chars']}>
          <div className={styles['char-weight']}>6.9kg</div>
          <div className={styles['char-length']}>0.7m</div>
        </div>
        <ul className={styles['stats']}>
          <li className={styles['stat-item']}>
            <label className={styles['stat-values']}>
              <div className={styles['stat-name']}>HP</div>
              <div>045</div>
            </label>

            <progress value="20" max="255" />
          </li>
          <li className={styles['stat-item']}>
            <label className={styles['stat-values']}>
              <div className={styles['stat-name']}>HP</div>
              <div>045</div>
            </label>

            <progress value="20" max="255" />
          </li>
          <li className={styles['stat-item']}>
            <label className={styles['stat-values']}>
              <div className={styles['stat-name']}>HP</div>
              <div>045</div>
            </label>

            <progress value="20" max="255" />
          </li>
          <li className={styles['stat-item']}>
            <label className={styles['stat-values']}>
              <div className={styles['stat-name']}>HP</div>
              <div>045</div>
            </label>

            <progress value="20" max="255" />
          </li>
          <li className={styles['stat-item']}>
            <label className={styles['stat-values']}>
              <div className={styles['stat-name']}>HP</div>
              <div>045</div>
            </label>

            <progress value="20" max="255" />
          </li>
          <li className={styles['stat-item']}>
            <label className={styles['stat-values']}>
              <div className={styles['stat-name']}>HP</div>
              <div>045</div>
            </label>

            <progress value="20" max="255" />
          </li>
        </ul>
      </div>
    </article>
  )
}
