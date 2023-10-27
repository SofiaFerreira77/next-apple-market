import styles from '@/styles/ProductItem.module.css'

export default function ProductItem({ product }) {
    return (
        <a href={'detail/' + product.id} className={styles.Product}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            {product.price}
            {product.category}
        </a>
    )
}