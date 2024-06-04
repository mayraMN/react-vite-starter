import styles from './Header.module.css'


export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <img src="/common_icons/pokeball.svg" alt="" />
                <h1>Pokédex</h1>
            </nav>
        </header>
    )
}