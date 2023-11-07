"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCartQuantityCase } from '@/useCases/CartUseCase';
import { Bag } from './shared/Icons';

export default function BagComponent() {
    const [cartQuantity, setCartQuantity] = useState(0);

    function getCartQuantity() {
        getCartQuantityCase().then((cart) => setCartQuantity(Number(cart)));
    }

    useEffect(() => {
        getCartQuantity()
    }, [])

    return (
        <>
            {cartQuantity > 0 ? <Link href="../cart">{cartQuantity}<Bag /></Link> : ''}
        </>
    )
}