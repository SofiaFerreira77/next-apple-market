import styles from '@/styles/Banner.module.css'

const Banner = props => {
    const { title, subtitle, link, linkName, image, darkText } = props;
    const defaultColor = darkText ? 'text-black' : 'text-white';

    return (
        <section className={styles.Banner + ' ' + defaultColor} style={{ backgroundImage: `url(` + image + `)` }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <a href={link}>{linkName}</a>
        </section>
    )
}

export default Banner