// import bulbasaur from '../../public'

export const Card = () => {
  return (
    <article className="card">
      <header className="card-header">
        <h2 className="pokemon-name">Bulbasaur</h2>
        <div className="pokemon-number">#001</div>
      </header>
      <img className="pokemon-image" src="/bulbasaur.png" alt="" />
      <div>
        <div className="pokemon-types">
          <div className="pokemon-type-grass">Grass</div>
          <div className="pokemon-type-poison">Poison</div>
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
