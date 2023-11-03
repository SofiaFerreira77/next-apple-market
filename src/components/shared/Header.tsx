import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { Bag, Logo, Search } from './Icons'

export default function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <Link href="/" className={styles.HeaderLogo}>
                    <Logo /> Market
                </Link>

                <nav>
                    <ul>
                        <li><Link href="../">Home</Link></li>
                        <li><Link href="../list">List Page</Link></li>
                        <li><Link href="../about">About</Link></li>
                    </ul>
                </nav>

                <div className={styles.HeaderShopping}>
                    <Search />
                    <Link href="../cart"><Bag /></Link>
                </div>
            </div>
        </header>
    )
}