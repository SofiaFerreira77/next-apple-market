"use client"

import { useEffect, useState } from 'react';
import { getCartCase } from '@/useCases/CartUseCase';
import { isArrayEmpty } from '@/utils/Utils'
import styles from '@/styles/CartList.module.css'
import CartProduct from "./CartProduct"

export default function CartList() {
    const [cart, setCart] = useState({
        id: 1,
        products: [],
        totals: {
            quantity: 0,
            price: 0,
            taxes: 0,
            delivery: 0,
            totalPrice: 0
        }
    });

    const [loading, setLoading] = useState(false);

    async function getCartInfo() {
        setLoading(true);

        getCartCase().then((response) => {
            if (response) {
                setCart(response);
                setLoading(false);
            }
        });
    }

    useEffect(() => {
        getCartInfo();
    }, [])

    return (
        <section className={styles.CartList}>
            <div className={'container flex flex-col gap'}>
                {isArrayEmpty(cart.products) ?
                    <p>Loading...</p>
                    :
                    cart.products.map((product) => <CartProduct key={product.productId} product={product} />)
                }
            </div>
        </section>
    )
}