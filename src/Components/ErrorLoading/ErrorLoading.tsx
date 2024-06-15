import styles from './ErrorLoading.module.css'
export const ErrorLoading = () => {
  return (
    <div className={styles.errorLoading}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2057_724)">
          <path
            d="M8 32C8 35.1517 8.62078 38.2726 9.82689 41.1844C11.033 44.0962 12.8008 46.742 15.0294 48.9706C17.258 51.1992 19.9038 52.967 22.8156 54.1731C25.7274 55.3792 28.8483 56 32 56C35.1517 56 38.2726 55.3792 41.1844 54.1731C44.0962 52.967 46.742 51.1992 48.9706 48.9706C51.1992 46.742 52.967 44.0962 54.1731 41.1844C55.3792 38.2726 56 35.1517 56 32C56 28.8483 55.3792 25.7274 54.1731 22.8156C52.967 19.9038 51.1992 17.258 48.9706 15.0294C46.742 12.8008 44.0962 11.033 41.1844 9.82689C38.2726 8.62078 35.1517 8 32 8C28.8483 8 25.7274 8.62078 22.8156 9.82689C19.9038 11.033 17.258 12.8008 15.0294 15.0294C12.8008 17.258 11.033 19.9038 9.82689 22.8156C8.62078 25.7274 8 28.8483 8 32Z"
            stroke="#989499"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 24V34.6667"
            stroke="#989499"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 42.6666V42.6933"
            stroke="#989499"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2057_724">
            <rect width="64" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p className={styles.errorMessage}>
        An error occurred getting Pokémons. <br /> Please, try it later
      </p>
    </div>
  )
}
