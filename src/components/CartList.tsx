"use client"

import { isArrayEmpty } from '@/utils/Utils'
import useCartStore from '@/store/cartStore';
import styles from '@/styles/CartList.module.css'
import CartProduct from "./CartProduct"

export default function CartList() {
    const { cart } = useCartStore();

    return (
        <section className={styles.CartList}>
            <div className={'flex flex-col gap'}>
                {isArrayEmpty(cart) ?
                    <p>Loading...</p>
                    :
                    cart.map((product) => <CartProduct key={product.id} product={product} />)
                }
            </div>
        </section>
    )
}