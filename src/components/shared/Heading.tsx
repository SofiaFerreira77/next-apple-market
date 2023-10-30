import styles from '@/styles/Heading.module.css'

type HeadingProps = {
    title: string,
    subtitle?: string
}

export default function Heading(props: HeadingProps) {
    const {title, subtitle} = props
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
        </>
    )
}