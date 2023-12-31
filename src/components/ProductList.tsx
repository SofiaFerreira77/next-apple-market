import { isArrayEmpty } from '@/utils/Utils'
import styles from '@/styles/ProductList.module.css'
import ProductItem from "./ProductItem"

export default function List({ products }: typeProducts) {
    return (
        <section className={styles.ProductList}>
            <div className={styles.ProductListContainer + ' container'}>
                { isArrayEmpty(products) ?
                    <p>Loading...</p>
                    :
                    products?.map((product: Product, index) => <ProductItem key={product.id} index={index} product={product} />)
                }
            </div>
        </section>
    )
}