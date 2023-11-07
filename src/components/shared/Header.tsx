import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { Logo } from './Icons'
import Search from './Search'
import BagComponent from '../BagComponent'

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
                    <BagComponent />
                </div>
            </div>
        </header>
    )
}