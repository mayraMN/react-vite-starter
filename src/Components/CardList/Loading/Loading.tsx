import { CardLoading } from '../../Card/CardLoading'
import styles from '../CardList.module.css'

export const Loading = () => {
  return (
    <div className={styles['cardList']}>
      <CardLoading />
      <CardLoading />
      <CardLoading />
    </div>
  )
}
