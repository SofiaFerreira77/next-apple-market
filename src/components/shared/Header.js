import styles from '../../styles/Header.module.css'
import { Bag, Logo, Search } from './Icons'

export default function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <a href="/" className={styles.HeaderLogo}>
                    <Logo /> Market
                </a>

                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/list">List Page</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>

                <div className={styles.HeaderShopping}>
                    <Search />
                    <Bag />
                </div>
            </div>
        </header>
    )
}