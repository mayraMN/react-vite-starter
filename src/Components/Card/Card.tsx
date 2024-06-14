import styles from './Card.module.css'
import { Pokemon } from '../../App'
import { capitalizeFirstLetter, formatIdNumber, iconsDic } from '../Utils/Utils'
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
    <article className={`${styles.card} ${styles[types[0]]}`}>
      <header className={styles['card-header']}>
        <h2 className={styles['name']}>{capitalizeFirstLetter(name)}</h2>
        <div className={styles['number']}>#{formatIdNumber(id)}</div>
      </header>
      <div className={styles['card-info']}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles['tags']}>
          {types.map(type => {
            return (
              <div className={`${styles['tag']} ${styles[type]}`} key={type}>
                {iconsDic[type]}
                {capitalizeFirstLetter(type)}
              </div>
            )
          })}
        </div>
        <div className={styles['chars']}>
          <div className={styles['char-weight']}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2053_1244)">
                <path
                  d="M5 11.6667C5 9.89856 5.70238 8.20286 6.95262 6.95262C8.20286 5.70238 9.89856 5 11.6667 5H28.3333C30.1014 5 31.7971 5.70238 33.0474 6.95262C34.2976 8.20286 35 9.89856 35 11.6667V28.3333C35 30.1014 34.2976 31.7971 33.0474 33.0474C31.7971 34.2976 30.1014 35 28.3333 35H11.6667C9.89856 35 8.20286 34.2976 6.95262 33.0474C5.70238 31.7971 5 30.1014 5 28.3333V11.6667Z"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.0001 11.6667C23.2601 11.6667 26.2068 13.0033 28.3334 15.1583L23.4068 19.9983C22.4827 19.1425 21.2696 18.6669 20.0101 18.6667C18.7508 18.6664 17.5378 19.1414 16.6134 19.9967L11.6868 15.1583C12.7727 14.0499 14.0694 13.1699 15.5005 12.5703C16.9317 11.9706 18.4684 11.6634 20.0201 11.6667H20.0001Z"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2053_1244">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>{weight / 10} kg</div>
          </div>
          <div className={styles['chars-separator']}></div>
          <div className={styles['char-length']}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2053_1230)">
                <path
                  d="M33.125 13.3334C34.16 13.3334 35 14.1867 35 15.2384V24.7617C35 25.8134 34.16 26.6667 33.125 26.6667H6.66667C6.22464 26.6667 5.80072 26.4911 5.48816 26.1786C5.17559 25.866 5 25.4421 5 25V15.2384C5 14.1867 5.84 13.3334 6.875 13.3334H33.125Z"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 13.3334V16.6667"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13.3334V18.3334"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 13.3334V18.3334"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 13.3334V18.3334"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 13.3334V16.6667"
                  stroke="#3F3D3F"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2053_1230">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>{height / 10} m</div>
          </div>
        </div>
        <ul className={styles['stats']}>
          {stats.map((stat, index) => {
            return (
              <li key={index} className={styles['stat-item']}>
                <label className={styles['stat-values']}>
                  <div className={styles['stat-name']}>{stat.name}</div>
                  <div>{formatIdNumber(stat.value)}</div>
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
