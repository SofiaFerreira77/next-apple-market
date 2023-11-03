import { isArrayEmpty } from '@/utils/Utils'
import styles from '@/styles/CartList.module.css'
import CartProduct from "./CartProduct"

export default function CartList({ products }: {products: CartProduct[]}) {
    return (
        <section className={styles.CartList}>
            <div className={'container flex flex-col gap'}>
                { isArrayEmpty(products) ?
                    <p>Loading...</p>
                    :
                    products.map((product) => <CartProduct key={product.productId} product={product} />)
                }
            </div>
        </section>
    )
}