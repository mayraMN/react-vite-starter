// import bulbasaur from '../../public'

export const Card = () => {
  return (
    <article>
      <header>
        <h2>Bulbasaur</h2>
        <div>#001</div>
      </header>
      <img src="/bulbasaur.png" alt="" />
      <div>
        <div>
          <div>Grass</div>
          <div>Poison</div>
        </div>
        <div>
          <div>6.9kg</div>
          <div>0.7m</div>
        </div>
        <ul>
          <li>
            <label>HP</label>
            <div>045</div>
            <progress value="20" max="255" />
          </li>
          <li>
            <label>HP</label>
            <div>045</div>
            <progress value="20" max="255" />
          </li>
          <li>
            <label>HP</label>
            <div>045</div>
            <progress value="20" max="255" />
          </li>
        </ul>
      </div>
    </article>
  )
}
