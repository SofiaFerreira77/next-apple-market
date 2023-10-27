import styles from '../../styles/Footer.module.css'

export default function Footer({ developer }) {
    return (
        <footer className={styles.Footer}>
            <a href={developer.link} target="_blank" rel="noreferrer noopener">
                {developer.label}
                <strong>{developer.name}</strong>
            </a>
        </footer>
    )
}