"use client"

import useCartStore from '@/store/cartStore';
import styles from '@/styles/CartList.module.css'
import CartProduct from "./CartProduct"

export default function CartList() {
    const { cart, count } = useCartStore();

    return (
        <section className={styles.CartList}>
            <div className={'flex flex-col gap'}>
                { count === 0 ?
                    <p className='text-center' >Your Cart is Empty</p>
                    :
                    cart.map((product) => <CartProduct key={product.id} product={product} />)
                }
            </div>
        </section>
    )
}